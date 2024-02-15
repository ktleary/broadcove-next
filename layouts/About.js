import { markdownify } from "@lib/utils/textConverter";



/*
todo: the vertical margins between the sections are way to large -- need to reduce them so there is not so much white space between the sections
*/

const About = ({ data }) => {
  const { frontmatter, content } = data;
  const { title, sections, image, meta_title } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        {sections.map((section, index) => (
          <div key={`about-${index}`} className=" row justify-center">
            <div className="content lg:5 col-12 md:col-6">
              {markdownify(section.title, "h4")}
              {markdownify(section.content, "p")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
