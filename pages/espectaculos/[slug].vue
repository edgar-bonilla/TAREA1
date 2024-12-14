<script setup lang="ts">


const route = useRoute();
const { data } = await useAsyncData(`espectaculo-${route.params.slug}`, () =>
  queryContent(`/espectaculos/${route.params.slug}`).findOne()
);
</script>

<template>
  <div class="container" >
    <div v-if="data" class="markdown-content">
      <ContentRenderer :value="data" />
    </div>
  </div>
</template>



<style scoped>
.markdown-content.espectaculos {
    font-family: 'Roboto', sans-serif;
    line-height: 1.8;
    color: #333;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.markdown-content.espectaculos h1, .markdown-content.espectaculos h2, .markdown-content.espectaculos h3,
.markdown-content.espectaculos h4, .markdown-content.espectaculos h5, .markdown-content.espectaculos h6 {
    color: #2c3e50;
    margin-top: 1.5em;
    margin-bottom: 0.75em;
    line-height: 1.3;
    border-bottom: 3px solid #3498db;
    padding-bottom: 0.4em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
}

.markdown-content.espectaculos h1 {
    font-size: 2.8em;
    font-weight: 700;
}

.markdown-content.espectaculos h2 {
    font-size: 2.2em;
    font-weight: 600;
}

.markdown-content.espectaculos h3 {
    font-size: 1.8em;
    font-weight: 600;
}

.markdown-content.espectaculos h4 {
    font-size: 1.5em;
    font-weight: 600;
}

.markdown-content.espectaculos p {
    margin: 1em 0;
    font-size: 1.15em;
    color: #4d4d4d;
}

.markdown-content.espectaculos a {
    color: #3498db;
    text-decoration: none;
    font-weight: 500;
    border-bottom: 2px solid #3498db;
    transition: color 0.3s, border-bottom-color 0.3s;
}

.markdown-content.espectaculos a:hover {
    color: #1abc9c;
    border-bottom-color: #1abc9c;
}

.markdown-content.espectaculos img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin: 1.5em 0;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.markdown-content.espectaculos ul, .markdown-content.espectaculos ol {
    margin: 1.5em 0;
    padding-left: 1.5em;
    font-size: 1.1em;
}

.markdown-content.espectaculos ul li, .markdown-content.espectaculos ol li {
    margin-bottom: 0.75em;
}

.markdown-content.espectaculos ul li:before {
    content: '•';
    color: #3498db;
    margin-right: 0.5em;
    font-size: 1.2em;
}

.markdown-content.espectaculos blockquote {
    padding: 1em 1.5em;
    margin: 1.5em 0;
    border-left: 5px solid #3498db;
    background-color: #ecf6ff;
    font-style: italic;
    color: #555;
    position: relative;
}

.markdown-content.espectaculos blockquote:before {
    content: "“";
    font-size: 4em;
    color: #3498db;
    position: absolute;
    left: 10px;
    top: -10px;
    line-height: 1;
}

.markdown-content.espectaculos code {
    background-color: #f4f4f4;
    padding: 0.3em 0.5em;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1em;
    color: #c0392b;
}

.markdown-content.espectaculos pre {
    background-color: #282c34;
    color: #ffffff;
    padding: 1.2em;
    border-radius: 12px;
    overflow-x: auto;
    margin: 1.5em 0;
}

.markdown-content.espectaculos pre code {
    background: none;
    color: inherit;
    padding: 0;
    font-size: 1em;
}

.markdown-content.espectaculos table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5em 0;
    font-size: 1.1em;
}

.markdown-content.espectaculos table th, .markdown-content.espectaculos table td {
    padding: 0.75em 1em;
    border: 1px solid #ddd;
}

.markdown-content.espectaculos table th {
    background-color: #3498db;
    color: #ffffff;
    text-align: left;
}

.markdown-content.espectaculos table td {
    background-color: #f9f9f9;
}

.markdown-content.espectaculos hr {
    border: 0;
    border-top: 3px solid #ddd;
    margin: 2em 0;
}
</style>
