const codeSample = (props) => {
  const { children, language } = props;
  return (
    <pre className="codeSample">
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}