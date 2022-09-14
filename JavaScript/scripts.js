function updatePreview() {
    let previewElement = document.getElementById("preview");
    let editorValue = document.getElementById("editor").value;
    let markedValue = marked.parse(editorValue); 
    previewElement.innerHTML = markedValue;
};

function setDefault() {
    let defaultText = `\
# Markdown Previewer
## by Arzhan
[About Arzhan](https://github.com/roses-are-dead666)

\` Example of inline code or smth \`

\`\`\`
function exampleOf() {
    return CodeBlock;
}
\`\`\`

- Example
- of
- List
- Item

> Example of Block Quote

![Example of image](https://i.discogs.com/YMIeN0toYP9m6QMzmf6jn9yTvgnLMM97sx2vqtnc20A/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg1NjQz/MDItMTQ2NDEyMzc3/My01NDI4LnBuZw.jpeg)

**Example of Bold Text**
`;
    let editorField = document.getElementById("editor");
    let previewElement = document.getElementById("preview");
    editorField.value = defaultText;
    previewElement.innerHTML = marked.parse(defaultText);
}
