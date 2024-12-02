export const readTimeCount = (content) => {
    const wordCount = content.trim().split(" ").length;
    const readTime = Math.ceil(wordCount/200);
    return readTime;
   
}