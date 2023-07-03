import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/project";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-6xl font-bold">
        Namaste I am {" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Miraz
        </span>
      </h1>

      <p className="mt-3 text-xl text-grey-600">Namaste, Check out my blog</p>

      <h2 className="mt-24 font-bold text-gray-700">My Blogs</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project) => (
          <div key={project._id} className="border border-gray-500 rounded-lg p-3">
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="font-extrabold g-gradient-to-r text-gray-700">
              {project.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
