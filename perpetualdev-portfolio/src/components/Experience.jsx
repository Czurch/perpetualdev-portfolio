import * as react from "react";

const Experience = ({ props }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-wrap flex-col w-2/3">
        <div className="bg-secondary text-primary rounded-lg w-3/5 p-5 m-5 self-start">
          <div className="flex flex-col m-2 bg-secondarybg rounded-lg p-2">
            <div className="flex flex-row justify-between">
              <h2 className="text-primaryButton text-xl">Pluralsight</h2>
              <h4 className="text-sm ml-2 self-end">Farmington, Utah</h4>
            </div>
            <div className="self-end text-sm">
              <h3>Software Engineer 2022-2023</h3>
            </div>
          </div>
          <div>
            <p className="text-left">
              Responsible for the full Video Services life-cycle from uploading
              and content authoring to video delivery and embeddable player
              support to ensure a smooth user experience. Tasked with
              implementing new features to improve the user experience
              including; accessibility options for individuals with visual
              impairments, and scrubbing thumbnails to the catalog of video
              learning modules. Wrote and maintained a Node, React, PostgreSQL
              stack as well as created and maintained RESTful APIs. Utilized
              tools like Gitlab, Postman, Kafka, Mux, and Docker to streamline
              development and ensure seamless integration. Monitored and triaged
              error in the video service, ensuring no downtime by responding to
              OpsGenie alerts and analyzing live issues. Lead a team to
              integrate code between Pluralsight and a newly acquired company,
              extending learning modalities for both platforms and creating a
              unified learning experience for the end user.
            </p>
          </div>
        </div>
        <div className="bg-secondary text-primary rounded-lg w-3/5 p-5 m-5 self-end">
          <div className="flex flex-col m-2 bg-secondarybg rounded-lg p-2">
            <div className="flex flex-row justify-between">
              <h2 className="text-primaryButton text-xl">DELL EMC</h2>
              <h4 className="text-sm ml-2 self-end">
                Hopkinton, Massachusetts
              </h4>
            </div>
            <div className="self-end text-sm">
              <h3>Software Engineer 2016–2022</h3>
            </div>
          </div>
          <div>
            <p className="text-left">
              Maintained, organized and restructured the working code-base of
              EMC’s flagship VMAX system. Specifically addressing bugs and
              updates to the code regarding the cache structures. Took part in
              the full development lifecycle including testing, continuous
              integration, delivery and support of microservice based products.
              Wrote clean, modular code that adheres to strict coding standards.
              Emphasis on multi-threaded, parallel programming concepts and
              memory management in C. Able to work in Linux environments, as
              well as to create and learn new command line interfaces. Requires
              deep knowledge in C, the ability to collaborate using Git, as well
              as an understanding of Linux CLI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
