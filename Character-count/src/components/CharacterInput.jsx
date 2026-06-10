
function TextInput({text,setText}) {
    const handleChange=(e)=>{
        setText(e.target.value);
    };
    return(
        <textarea
        placeholder="Start typing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="8"
        >
        </textarea>
    )
}
export default TextInput;