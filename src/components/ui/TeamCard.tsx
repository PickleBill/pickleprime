
import React from "react";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  className?: string;
}

const TeamCard = ({
  name,
  role,
  bio,
  image,
  className,
}: TeamCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl overflow-hidden group hover:shadow-md transition-all duration-300 border border-gray-100",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-navy">{name}</h3>
        <p className="text-primary font-medium">{role}</p>
        <p className="text-gray-600 mt-2 text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
