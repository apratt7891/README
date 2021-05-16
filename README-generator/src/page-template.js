// create the about section
const generateAbout = descriptionText => {
  if (!descriptionText) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p>${descriptionText}</p>
    </section>
  `;
};

// create the projects section
const generateProjects = projectsArr => {
  return `
    <section class="table of contents">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Table of Contents</h2>
     
      ${projectsArr
        .filter(({ feature }) => feature)
        .map(({ install, usage, license, contribution, test }) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${description}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.map(language => language).join(',')}
            </h5>
            <p>Table of Contents</p>
            <a href="${install}" </i>Installation Instructions</a>
            <a href="${usage}" </i>Usage Instructions</a>
            <a href="${license}" </i>License Information</a>
            <a href="${contribution}"</i>Contribution Information</a>
            <a href="${test}" </i>Test Information/a>
          </div>
        `;
        })
        .join('')}
        </div>
        </section>
      `;
    };


// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { projects, about, ...header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>README Generator</title>
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">ReadMe</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">
      ${generateAbout(about)}
      ${generateProjects(projects)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2021 by Amber</h3>
    </footer>
  </body>
  </html>
  `;
};