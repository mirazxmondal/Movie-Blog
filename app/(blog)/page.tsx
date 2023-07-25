import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-6xl font-bold">
        Namaste, I am {" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Miraz!
        </span>
      </h1>

      <p className="mt-3 text-xl text-grey-600">Namaste, Check out my blog</p>
      <p>about the movie blog</p>
      <h2 className="mt-24 font-bold text-gray-700">My Blogs</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project) => (
          <Link 
        href={`/projects/${project.slug}`}
        key={project._id} 
        className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold g-gradient-to-r text-gray-700">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
