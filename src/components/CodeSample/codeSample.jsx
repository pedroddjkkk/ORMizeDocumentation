import "./index.css"

const CodeSample = (props) => {
  const { children, language } = props;
  return (
    <pre className="codeSample">
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}

export default CodeSample;