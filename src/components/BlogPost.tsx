import React from 'react';

interface PostProps { 

    titulo: string,
    data: string,
    autor: string, 
    artigo: string

}

export default function BlogPost({ titulo, data, autor, artigo }: PostProps) {
  return (
    <div className="p-4 bg-[#034752] shadow-md rounded-lg mb-4">
      <h2 className="text-2xl font-bold mb-2 text-white ">{titulo}</h2>
      <p className="text-white text-sm mb-2">{data} por {autor}</p>
      <p className="text-white">{artigo}</p>
    </div>
  );
}
