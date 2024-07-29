import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Input, Button } from "@material-tailwind/react";
import { useLanguage } from "../LanguageContext";

const position = { lat: 41.289032, lng: 69.199668 };

const Form = () => {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    numberOfGuests: "",
    checkInDate: "",
    destination: "",
    visaSupport: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = "7337555984:AAHR21u09zamBEBa6aYI1Q3ZZp6oQdXsGtM";
    const id = 6236437496;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${JSON.stringify(
      formData
    )}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
    setShowModal(true);
  };

  return (
    <div className="w-full align-middle justify-center items-center flex">
      <div className="lg:w-[70%] flex align-middle justify-center flex-col items-center my-16">
        <MapContainer
          center={position}
          zoom={16}
          className="w-full md:w-[78%] h-[450px] md:rounded-3xl z-20"
          style={{ borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        <div
          className="bg-[#F9F9F9] flex flex-col align-middle items-center w-[78%]"
          style={{
            borderBottomLeftRadius: "24px",
            borderBottomRightRadius: "24px",
          }}
        >
          <div
            className="flex justify-center items-center w-full"
            style={{
              borderBottomLeftRadius: "24px",
              borderBottomRightRadius: "24px",
            }}
          >
            <div className="p-10 rounded-lg w-full">
              <h2 className="text-2xl font-bold text-center mb-8">
                {translations.forum.formTitle}
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-6">
                  <Input
                    label={translations.forum.fields.name.label}
                    placeholder={translations.forum.fields.name.placeholder}
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input
                    label={translations.forum.fields.phoneNumber.label}
                    placeholder={
                      translations.forum.fields.phoneNumber.placeholder
                    }
                    name="phoneNumber"
                    type="number"
                    value={formData.phoneNumber}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      {translations.forum.fields.numberOfGuests.label}
                    </label>
                    <select
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      name="numberOfGuests"
                      value={formData.numberOfGuests}
                      onChange={handleSelectChange}
                    >
                      <option value="">
                        {translations.forum.fields.numberOfGuests.placeholder}
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                  <Input
                    required
                    label={translations.forum.fields.checkInDate.label}
                    placeholder="mm/dd/yyyy"
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      {translations.forum.fields.destination.label}
                    </label>
                    <select
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      name="destination"
                      value={formData.destination}
                      onChange={handleSelectChange}
                    >
                      <option value="">Antalya</option>
                      {translations.forum.fields.destination.options.map(
                        (option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div className="relative w-full">
                    <label className="block text-sm font-medium text-gray-700">
                      {translations.forum.fields.visaSupport.label}
                    </label>
                    <select
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      name="visaSupport"
                      value={formData.visaSupport}
                      onChange={handleSelectChange}
                    >
                      <option value="">Country</option>
                      {translations.forum.fields.visaSupport.options.map(
                        (option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <Button
                    className="bg-primary md:w-[80%] rounded-3xl shadow-none"
                    type="submit"
                  >
                    {translations.forum.submitButton}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl mb-4">Form Submitted Successfully!</h3>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
