# Mockoon svelte example

<p>To get this example working you need to add **.env** and **.env.test** files to the project with the following URLS:</p> 

### .env
<code>PUBLIC_BACKEND_URL=https://dummyjson.com</code>

### .env.test
<code>PUBLIC_BACKEND_URL=http://localhost:3001</code>

<p>This way you can run the preview:test and test:pre commands and should get the responses from the Mockoon Server</p>

<p>The dev or build environment will make requests to the dummyjson url</p>