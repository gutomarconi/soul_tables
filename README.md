# Introduction 
Esta é uma aplicacao para generenciar as mesas e comandas de cafés que usam o Tiny ERP para gerenciamento de PDV
Tech stack:
  - ReactJS - https://react.dev/
  - Styled Components - https://styled-components.com/
  - Typescript
  - esBuild for bundle creation - https://esbuild.github.io/


# Getting Started
1.	Installation process
  - Clone the repository from https://redkiteintelligence@dev.azure.com/redkiteintelligence/redkite-knowledge-engine/_git/RKE-UI
  - In the root folder run:
    - npm install
    - npm run dev - it will start a local server at http://localhost:8000
  
2.	Software dependencies
  - As Databricks does not allow CORS configuration (for existent workspaces), we have a middleware that does server-server request to Databricks.
  - The middleware is a Azure Function App that get a request from this app, request Databricks API and forward the response to this app. See Function App here https://portal.azure.com/#@redkite.com/resource/subscriptions/620f518a-54b6-41dc-9bae-51acf8348345/resourceGroups/rg-redkite-gen-ai-poc/providers/Microsoft.Web/sites/rkchatbot-middleware/appServices

# Architecture
  The app has src folder the contains the source code. It is split in api, components, features, theme and types where:
    - Api folder contains the function that handles the API call.
    - Components folder has the base components used across the app like buttons, loading, icon, page containers, side and top bars.
    - Features folder has the app features that are Chat, Conversations List and the Conversations Provider
      - Conversations Provider is a React Context so we keep the state and context updated across different app sections
    - Theme folder has the theme provider and default theme
    - Types folder has the types definition (Typescript)

# Contribute
  For contributing with this app you need to clone the repository from https://redkiteintelligence@dev.azure.com/redkiteintelligence/redkite-knowledge-engine/_git/RKE-UI, fork from origin/main branch and once you're done, create a Pull Request
  At of 09/11/2023 there are no policies around approvals on PRs as it is a POC.