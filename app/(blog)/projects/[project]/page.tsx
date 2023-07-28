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
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-blue-500 text-7xl font-extrabold">
          {project.name}
        </h1>
      </header>
      <main>
        {/* Image Section */}
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className="mt-10 rounded-xl object-cover"
        />
        {/* Content Section */}
        <div className="text-lg text-gray-500 mt-5">
          <PortableText value={project.content} />
        </div>
      </main>
    </div>
  );
}
