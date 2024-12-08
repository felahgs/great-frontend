/* eslint-disable @next/next/no-img-element */
import React from "react";

interface TestimonalCardProps {
  title: string;
  subtitle: string;
  text: string;
  imageUrl: string;
}

function TestimonialCard({
  title,
  subtitle,
  text,
  imageUrl,
}: TestimonalCardProps) {
  return (
    <div className="flex flex-col gap-4 border w-[340px] p-5 bg-white rounded-lg shadow-md ">
      <div className="flex align-middle gap-4">
        <img className="h-16 w-16 rounded-full" src={imageUrl} alt="avatar" />
        <div className="flex flex-col justify-center align-middle truncate">
          <p className="text-primary font-bold text-lg truncate">{title}</p>
          <p className="text-tertiary truncate">{subtitle}</p>
        </div>
      </div>
      <p className="text-secondary">{text}</p>
    </div>
  );
}

export default TestimonialCard;