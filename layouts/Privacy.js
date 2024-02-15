import { markdownify } from "@lib/utils/textConverter";

function Privacy({ data }) {
  const { frontmatter } = data;
  const { title, last_updated, description, sections = [] } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <p className="mt-4 text-center">{last_updated}</p>
        {markdownify(description, "p", " mt-4")}
        <div className="section row  -mt-6">
          {sections.map((section, index) => (
            <div key={index} className="mt-6">
              <div className="p-12  shadow">
                <div className="relative">
                  {markdownify(section.title, "h4")}
                </div>
                {markdownify(section.content, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Privacy;
