import React from 'react';

function CardInfo({ icon, title, description }) {
  return (
    <div className="h-full w-full border-2 border-slate-600 rounded-xl shadow-sm p-2 flex flex-col justify-start ">
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="font-semibold text-xl mb-1">{title}</h3>
      <p className="text-slate-600  text-lg leading-relaxed">{description}</p>
    </div>
  );
}

export default CardInfo;
