import classes from "./options.module.css";
type TextareaProps = {
  onChange: (value: string) => void;
};

const Textarea = ({ onChange }: TextareaProps) => {
  return (
    <textarea
      rows={5}
      cols={33}
      className={classes.textarea}
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value)}
      required
    ></textarea>
  );
};

export default Textarea;
