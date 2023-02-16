import CodeSample from "../../components/CodeSample/codeSample";

const ORMizeDocumentation = () => {
  return (
    <>
      <div className="contentSection" id="ormizeSection">
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
      <div className="contentSection" id="installingSection">
        <h1>Installing</h1>
        <p>To install ORMize, you can use npm:</p>
        <CodeSample language="bash">npm install ormize</CodeSample>
        <p>Or you can use yarn:</p>
        <CodeSample language="bash">yarn add ormize</CodeSample>
      </div>
      <div className="contentSection" id="connectionSection">
        <h1>Connection</h1>
        <p>
          To use ORMize, you need to set up the connection to the database and
          create your model classes.
        </p>
        <h3>Setting up the connection</h3>
        <CodeSample language="typescript">
          {`import { Connection } from "ormize"; 
          
const connection = new Connection({ host: "localhost", user: "root", port: 3306, database: "orm", });`}
        </CodeSample>
        <p>Checking the connection</p>
        <CodeSample language="typescript">
          {`import { Connection } from "ormize";

console.log(connection.isConnected());`}
        </CodeSample>
      </div>
      <div className="contentSection" id="modelSection">
        <h1>Creating model classes</h1>
        <p>
          To create a model class, you need to extend the Model class and define
          the table name and the columns.
        </p>
        <CodeSample language="typescript">
          {`import { Model, Types } from 'ormize';

class User extends Model {
  static tableName = 'users';
  static fields = {
    id: { type: Types.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Types.STRING, allowNull: true },
    age: { type: Types.INTEGER, allowNull: true },
    email: { type: Types.STRING },
    password: { type: Types.STRING },
  };
  static connection = connection.getConnection();
}`}
        </CodeSample>
        <p>
          Synchronizing the model with the database
        </p>
        <CodeSample language="typescript">
          {`import { Model, Types } from 'ormize';

class User extends Model {
  static tableName = 'users';
  static fields = {
    id: { type: Types.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Types.STRING, allowNull: true },
    age: { type: Types.INTEGER, allowNull: true },
    email: { type: Types.STRING },
    password: { type: Types.STRING },
  };
  static connection = connection.getConnection();
}

User.sync();`}
        </CodeSample>
      </div>
      <div className="contentSection" id="modelMethodsSection">
        <h1>Model methods</h1>
        <h3>Creating a new record</h3>
        <CodeSample language="typescript">
          {`import { Model, Types } from 'ormize';

class User extends Model {
  static tableName = 'users';
  static fields = {
    id: { type: Types.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Types.STRING, allowNull: true },
    age: { type: Types.INTEGER, allowNull: true },
    email: { type: Types.STRING },
    password: { type: Types.STRING },
  };
  static connection = connection.getConnection();
}

User.sync();

const user = new User();
user.name = 'John Doe';
user.age = 20;
user.email = 'jhon@email.com

await user.sync();`}
        </CodeSample>
      </div>
    </>
  );
};

export default ORMizeDocumentation;
