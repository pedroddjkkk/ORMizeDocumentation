import CodeSample from "../../components/CodeSample/codeSample";

const ORMizeDocumentation = () => {
  return (
    <>
      <div className="contentSection">
        <h1>ORMize Documentation</h1>
        <p>
          ORMize is a TypeScript-developed Object-Relational Mapping (ORM), but
          can also be used in JavaScript. Its goal is to ease the interaction
          between applications and databases, allowing developers to work with
          data using objects instead of writing SQL code.Currently, ORMize only
          supports the MySQL database, but I plan to add support for more
          databases in the future.
        </p>
      </div>
      <div className="contentSection">
        <h1>Installing</h1>
        <p>To install ORMize, you can use npm:</p>
        <CodeSample language="bash">
          npm install ormize
        </CodeSample>
      </div>
    </>
  );
};

export default ORMizeDocumentation;
