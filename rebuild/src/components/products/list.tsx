import Image from "next/image";
import Link from "next/link";
"use client";

export const ProductsList = () => {
  const products = [
    {
      id: "esp32-devkit",
      name: "ESP32 DevKit V1",
      sku: "ESP32-DK01",
      description:
        "ESP32 development board with WiFi and Bluetooth capabilities",
      price: 25000,
      category: "Microcontrollers",
      stock: 45,
      image: "/assets/components/esp32.jpg",
    },
    {
      id: "arduino-uno",
      name: "Arduino Uno R3",
      sku: "ARDUINO-UNO",
      description:
        "The most famous microcontroller board for beginners and experts",
      price: 35000,
      category: "Microcontrollers",
      stock: 32,
      image: "/assets/components/arduino.jpg",
    },
    {
      id: "dht22-sensor",
      name: "DHT22 Temperature & Humidity Sensor",
      sku: "DHT22-01",
      description:
        "High-quality digital temperature and humidity sensor",
      price: 8000,
      category: "Sensors",
      stock: 120,
      image: "/assets/components/dht22.jpg",
    },
    {
      id: "soil-moisture",
      name: "Soil Moisture Sensor Module",
      sku: "SOIL-MOIS-01",
      description:
        "Capacitive soil moisture detection for automation projects",
      price: 5000,
      category: "Sensors",
      stock: 89,
      image: "/assets/components/soil-moisture.jpg",
    },
    {
      id: "lcd1602",
      name: "LCD 1602 Display with I2C",
      sku: "LCD1602-I2C",
      description:
        "16x2 character LCD display with I2C interface for easy wiring",
      price: 12000,
      category: "Displays",
      stock: 67,
      image: "/assets/components/lcd1602.jpg",
    },
    {
      id: "lm2596",
      name: "LM2596 Adjustable Power Supply Module",
      sku: "LM2596-01",
      description:
        "Adjustable DC-DC step-down power supply module (1.2-35V)",
      price: 15000,
      category: "Power Supplies",
      stock: 54,
      image: "/assets/components/lm2596.jpg",
    },
    {
      id: "nodemcu",
      name: "NodeMCU ESP8266",
      sku: "NODEMCU-ESP",
      description:
        "USB development board with WiFi capabilities",
      price: 18000,
      category: "Microcontrollers",
      stock: 78,
      image: "/assets/components/nodemcu.jpg",
    },
    {
      id: "sg90-servo",
      name: "SG90 Micro Servo Motor",
      sku: "SG90-01",
      description:
        "Small servo motor for robotics and RC projects",
      price: 6000,
      category: "Motors & Drivers",
      stock: 95,
      image: "/assets/components/servo.jpg",
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="card hover-lift h-full transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2">
                  <span
                    className="px-2 py-1 text-xs text-navy bg-accent rounded"
                  >
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-navy mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-navy">
                      TShs {product.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">
                      {product.stock} in stock
                    </span>
                    {product.stock < 10 && (
                      <span className="text-red-500 text-xs">Low stock</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};