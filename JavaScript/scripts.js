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

![Example of image](https://cdn.memes.com/up/38787851601040191/i/1605101584106.jpg)

**Example of Bold Text**
`;
    let editorField = document.getElementById("editor");
    let previewElement = document.getElementById("preview");
    editorField.value = defaultText;
    previewElement.innerHTML = marked.parse(defaultText);
}