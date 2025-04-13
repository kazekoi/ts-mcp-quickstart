import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import getCurrentUTC from "./tools/get-utc.js";

const server = new McpServer({
  name: "clock",
  version: "0.0.1",
  capabilities: {
    resources: {},
    tools: {},
  },
});

server.tool("get_current_UTC", "Get the current UTC", {}, async () => {
  return {
    content: [
      {
        type: "text",
        text: getCurrentUTC(),
      },
    ],
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Clock MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
