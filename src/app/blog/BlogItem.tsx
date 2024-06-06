'use client'


interface BlogItemProps {
    post: Post
}

export function BlogItem({ post }: BlogItemProps) {
    return (
        <>
            <div className="p-6 bg-[#034752] shadow-md rounded-lg mb-6">
                <div>
                    <h2 className="text-2xl font-bold mb-2 text-white ">{post.titulo}</h2>
                </div>
                <div className="flex  flex-col justify-between text-white text-sm mb-4">
                    <p>{post.data} </p>
                    <p>por {post.autor.nome}</p>
                </div>
                <div>
                <p className="text-white">{post.artigo}</p>
                </div>

                
            </div>
        </>
    )
}