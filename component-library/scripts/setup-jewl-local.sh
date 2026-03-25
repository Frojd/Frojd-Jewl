#!/bin/bash

# Setup script for enabling local component cloning with jewl
# This allows you to clone components from component-library to component-library
# Usage: npm run setup:jewl

echo "Setting up local jewl configuration..."

# Create jewlconfig.json
cat > jewlconfig.json << 'EOF'
{
  "componentMapping": [],
  "basePath": "app",
  "repository": "https://github.com/Frojd/Frojd-Jewl.git",
  "repositoryPaths": {
    "root": ".",
    "basePath": "app",
    "components": "app/components",
    "containers": "app/containers",
    "layouts": "app/layouts"
  },
  "repositoryBranch": "develop"
}
EOF

# Create symlink to use local components as repository
if [ ! -e .jewl-repo ]; then
  ln -s . .jewl-repo
  echo "✓ Created .jewl-repo symlink"
else
  echo "✓ .jewl-repo already exists"
fi

echo "✓ Created jewlconfig.json"
echo ""
echo "Setup complete! You can now clone components locally using:"
echo "  npm run jewl clone <SourceComponent> <NewComponent>"
echo ""
echo "Example:"
echo "  npm run jewl clone Modules SectionListModule"
