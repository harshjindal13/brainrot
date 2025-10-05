import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Footer } from "../components/footer";
import { Mobhero } from "../components/mobhero";
import { MobNav } from "../components/mobNav";
import { BACKEND_URL } from '../config';

export function Dashboard() {
  const { id } = useParams(); // Get ID from URL
  const [passData, setPassData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPassData = async () => {
      try {
        setLoading(true);
        // Fetch specific pass by ID or all passes
        let response;
        if (id) {
          // If ID is provided in URL, fetch specific pass
          response = await axios.get(`${BACKEND_URL}/api/dtc/${id}`);
          setPassData(response.data);
        } else {
          // If no ID, fetch all passes and use the first one
          response = await axios.get(`${BACKEND_URL}/api/dtc`);
          if (response.data && response.data.length > 0) {
            setPassData(response.data[0]); // Use the first pass
          } else {
          // Fallback to hardcoded data if no passes found
          setPassData({
            name: "ANKIT SHARMA",
            passNumber: "7502092530442",
            fromDate: "19/09/2025",
            toDate: "18/10/2025",
            photo: "/../../assets/user-photo.jpg",
            qrCode: "../../assets/qr-code.png"
          });
          }
        }
      } catch (err) {
        console.error('Error fetching pass data:', err);
        setError('Failed to load pass data');
        // Fallback to hardcoded data on error
        setPassData({
          name: "ANKIT SHARMA",
          passNumber: "7502092530442",
          fromDate: "19/09/2025",
          toDate: "18/10/2025",
          photo: "/../../assets/user-photo.jpg",
          qrCode: "../../assets/qr-code.png"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPassData();
  }, [id]); // Re-run when ID changes

  if (loading) {
    return (
      <>
        <MobNav />
        <div className="flex justify-center items-center h-64">
          <div className="text-xl font-semibold text-[#01a2a6]">Loading pass data...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <MobNav />
        <div className="flex justify-center items-center h-64">
          <div className="text-xl font-semibold text-red-500">{error}</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <MobNav />

      <Mobhero
        url={passData?.photo || "/../../assets/user-photo.jpg"}
        name={passData?.name || "ANKIT SHARMA"}
        passNumber={passData?.passNumber || "7502092530442"}
        fromDate={passData?.fromDate || "19/09/2025"}
        toDate={passData?.toDate || "18/10/2025"}
        qrurl={passData?.qrCode || "../../assets/qr-code.png"}
      />

      <Footer />
    </>
  )
}
