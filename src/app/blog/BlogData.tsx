'use client'

import { useEffect, useState } from "react"
import { get } from "../actions/blog/get"
import { Filter } from "lucide-react"
import { Button, Pagination } from "@nextui-org/react"
import { BlogItem } from "./BlogItem"
import { MesesSelect } from "@/components/MesesSelect"

interface BlogDataProps {
    posts: Array<Post>
}

export function BlogData({ posts }: BlogDataProps) {
    const [filteredPosts, setFilteredPosts] = useState(posts || [])
    const [filter, setFilter] = useState({ mes: new Date().getMonth() + 1 })
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(10)

    useEffect(() => {
        const fecthData = async () => {
            try {
                const data = await get(Number(filter.mes), page)
                const blogList = data._embedded?.blogList || []
                setFilteredPosts(blogList)
                setFilter(data.page?.totalPages || 1)
            } catch (error) {
                throw new Error("Falha ao filtrar posts")
            }
        }

        fecthData()
    }, [filter, page])

    const changeFilter = (e: any) => {
        setFilter({ ...filter, [e.target.name]: e.target.value })
    }

    const clearFilter = () => {
        setFilter({ mes: new Date().getMonth() + 1 })
    }

    const handlePageChange = (page: number) => {
        setPage(page)
    }

    return (
        <>

            <section className="flex flex-col items-center mt-28">
                <h1 className="text-4xl font-bold mb-8 text-white">Blog</h1>
                <div className="flex flex-row bg-[#021922] max-w-6xl w-full mx-auto p-8">
                    <div className="w-1/2 p-4 flex items-center gap-4">
                        <MesesSelect onChange={changeFilter} mes={filter.mes} />
                        <Button onClick={clearFilter}>Limpar</Button>

                    </div>
                </div>
                <div className="w-3/4 p-4 bg-[#034752] shadow-md rounded-lg">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map(post => <BlogItem key={post.id} post={post} />)
                    ) : (
                        <p className="text-white">Nenhum post encontrado.</p>
                    )}
                </div>
                

            </section>

            <Pagination
                onChange={handlePageChange}
                isCompact
                showControls
                total={totalPages}
                page={1}
                className="mt-6 mb-10 flex justify-center"
            />


        </>
    )
}