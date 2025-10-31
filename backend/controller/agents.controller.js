const Agent = require("../model/agents.model");
const Message = require("../helpers/Message");

// ========== Upload Agent ==========
exports.uploadAgent = async (req, res) => {
  try {
    console.log("📥 Request Body:", req.body);
    console.log("🖼️ Request File:", req.file);

    // 1️⃣ Image handle
    let imageData = {};
    if (req.file) {
      imageData = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    // 2️⃣ Auto-increment ID
    const lastAgent = await Agent.findOne().sort({ id: -1 }).limit(1);
    const nextId = lastAgent ? lastAgent.id + 1 : 1;
    console.log("Next ID to assign:", nextId);

    // 3️⃣ Create and Save
    const agent = new Agent({
      id: nextId,
      name: req.body.name,
      title: req.body.title,
      cname: req.body.cname,
      office: req.body.office,
      mobile: req.body.mobile,
      fax: req.body.fax,
      email: req.body.email,
      description: req.body.description,
      location: req.body.location,
      verified:req.body.verified !== undefined
      ? req.body.verified === "true" || req.body.verified === true
      : true,
      image: imageData, 
      role: req.body.role,
    });

    await agent.save(); 

    res.status(201).send({
      success: true,
      message: Message.AGENT_ADDED || "Agent added successfully!",
      agent,
    });
  } catch (error) {
    console.error("❌ Upload Agent Error:", error);
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
};

// ========== Update Agent ==========
exports.updateAgent = async (req, res) => {
  try {
    const agentId = Number(req.params.id);
    const existingAgent = await Agent.findOne({ id: agentId });
    if (!existingAgent) {
      return res.status(404).send({ message: Message.AGENT_NOT_FOUND });
    }

    let updateData = {
      name: req.body.name ?? existingAgent.name,
      cname: req.body.cname ?? existingAgent.cname,
      office: req.body.office ?? existingAgent.office,
      mobile: req.body.mobile ?? existingAgent.mobile,
      fax: req.body.fax ?? existingAgent.fax,
      email: req.body.email ?? existingAgent.email,
      description: req.body.description ?? existingAgent.description,
      location: req.body.location ?? existingAgent.location,
      role: req.body.role ?? existingAgent.role,
      verified:
        req.body.verified !== undefined
          ? req.body.verified === "true" || req.body.verified === true
          : existingAgent.verified,
    };

    if (req.file) {
      updateData.image = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    } else {
      updateData.image = existingAgent.image;
    }

    const updatedAgent = await Agent.findOneAndUpdate(
      { id: agentId },
      updateData,
      { new: true }
    );

    const formattedAgent = {
      ...updatedAgent._doc,
      image: updatedAgent.image?.data
        ? `data:${updatedAgent.image.contentType};base64,${updatedAgent.image.data.toString(
            "base64"
          )}`
        : null,
    };

    res.status(200).send({
      success: true,
      message: Message.AGENT_UPDATED || "Agent updated successfully!",
      updatedAgent: formattedAgent,
    });
  } catch (error) {
    console.error("❌ Update Agent Error:", error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};



// ==========  Delete Agent ==========
exports.deleteAgent = async (req, res) => {
  try {
    const deletedAgent = await Agent.findOneAndDelete({ id: Number(req.params.id) });

    if (!deletedAgent) {
      return res.status(404).send({ message: Message.AGENT_NOT_FOUND || "Agent not found" });
    }

    res.status(200).send({
      success: true,
      message: Message.AGENT_DELETED || "Agent deleted successfully!",
    });
  } catch (error) {
    console.error("❌ Delete Agent Error:", error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR || "Internal Server Error" });
  }
};



// ========== get all  Agent ==========

exports.getAllAgents = async (req, res) => {
  console.log("Enter to function");
  try {
    const agents = await Agent.find().sort({ createdAt: 1 });
    console.log("Agents found:", agents.length);

    const formattedAgents = agents.map(agent => {
      let imageSrc = null;

      if (agent.image?.data) {
        // 🖼️ Binary image (new upload)
        imageSrc = `data:${agent.image.contentType};base64,${agent.image.data.toString("base64")}`;
      } else if (typeof agent.image === "string") {
        // 🖼️ String path (old image)
        imageSrc = agent.image.startsWith("/images/")
          ? `http://localhost:1155${agent.image}`
          : agent.image;
      }

      return {
        ...agent._doc,
        image: imageSrc,
      };
    });

    console.log("Formatted Agents (1st):", formattedAgents[0]);

    res.status(200).send({ agents: formattedAgents });
  } catch (error) {
    console.error("❌ Get All Agents Error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};




// ========== Get Single Agent ==========
exports.getSingleAgent = async (req, res) => {
  try {
    const { id } = req.params;
    const agent = await Agent.findOne({ id:Number(id) });

    if (!agent) {
      return res.status(404).send({ message: Message.AGENT_NOT_FOUND });
    }

    const formattedAgent = {
      ...agent._doc,
      image: agent.image?.data
        ? `data:${agent.image.contentType};base64,${agent.image.data.toString(
            "base64"
          )}`
        : null,
    };

    res.status(200).send(formattedAgent);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: Message.INTERNAL_SERVER_ERROR });
  }
};
