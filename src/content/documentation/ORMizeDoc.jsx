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
        <CodeSample language="bash">npm install ormize</CodeSample>
        <p>Or you can use yarn:</p>
        <CodeSample language="bash">yarn add ormize</CodeSample>
      </div>
      <div className="contentSection">
        <h1>Connection</h1>
        <p>
          To use ORMize, you need to set up the connection to the database and
          create your model classes.
        </p>
        <h3>Setting up the connection</h3>
        <CodeSample language="typescript">
          {`import { Connection } from "ormize"; 
          
const connection = new Connection({ host: "localhost", user: "root", port: 3306, database: "orm", });
          `}
        </CodeSample>
        <p>
          Checking the connection
        </p>
        <CodeSample language="typescript">
          {`import { Connection } from "ormize";

console.log(connection.isConnected());`}
        </CodeSample>
      </div>
    </>
  );
};

export default ORMizeDocumentation;
