import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
  const urlParams = useParams()

  return (
    <>
        <h1>{urlParams.slug}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laboriosam eius eaque dolore incidunt minus quam mollitia iste nesciunt possimus, expedita officiis, quaerat a provident fugiat non dolor doloribus magnam! Quaerat quos earum tempore natus sed fuga recusandae harum, provident dolore totam excepturi ad nesciunt nemo maiores blanditiis ab perspiciatis nihil quod? Voluptatibus doloribus maxime assumenda provident sunt corporis, impedit ex odio, qui eos autem dolores facilis quos consectetur asperiores laborum, repellat dicta rerum hic eius ipsum voluptate. Omnis laborum commodi, labore accusamus non ad iusto sunt dolor molestias libero itaque iste assumenda nihil quam laudantium facilis quidem magni officia.</p>
    </>
  )
}

export default BlogDetails
