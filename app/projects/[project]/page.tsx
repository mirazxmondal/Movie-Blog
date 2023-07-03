import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex items-center justify-between">
        <h1 className="text-blue-500 text-7xl font-extrabold">
          {project.name}
        </h1>
        <a
          href="{project.url}"
          title="View Blog"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 rounded-lg font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transiiton"
        >
          View blog
        </a>
      </header>
      <main>
        {/* Content Section */}
        <div className="text-lg text-gray-500 mt-5">
          <PortableText value={project.content} />
        </div>
        {/* Image Section */}
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className="mt-10 rounded-xl object-cover"
        />
      </main>
    </div>
  );
}
