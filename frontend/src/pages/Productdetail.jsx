import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Topbar from "../components/common/Topbar";
import Navbar from "../components/common/Navbar";
import PropertyHeader from "../components/productdetail/PropertyHeader";
import PropertySection from "../components/productdetail/PropertySection";
import DescriptionSection from "../components/productdetail/DescriptionSection";
import AddressSection from "../components/productdetail/AddressSection";
import PropertyDetailsSection from "../components/productdetail/PropertyDetails";
import FloorPlans from "../components/productdetail/FloorPlans";
import VideoSection from "../components/productdetail/VideoSection";
import ReviewForm from "../components/productdetail/ReviewForm";
import Footer from "../components/common/footer";

export default function ProductDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`http://localhost:1155/cards/get/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setProperty(res.data.card))
      .catch((err) => console.error("Error fetching property:", err));
  }, [id, token]);

  if (!property) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div style={{ overflowX: "clip" }}>
      <Topbar />
      <Navbar />
      <PropertyHeader property={property} />
      <PropertySection property={property} />
      <DescriptionSection property={property} />
      <AddressSection property={property} />
      <PropertyDetailsSection property={property} />
      <FloorPlans property={property} />
      <VideoSection property={property} />
      {/* <ReviewForm property={property} /> */}
      <Footer />
    </div>
  );
}
