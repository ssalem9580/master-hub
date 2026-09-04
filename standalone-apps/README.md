# Recovered standalone applications

This branch preserves the production source for the standalone tools that are linked from Master Hub.

- `field-diagnostic-hub/index.html` — Field Diagnostic Hub
- `recovery-value-calculator/index.html` — BenchTested recovery-value calculator

Each directory is a complete static Vercel application. Configure each Vercel project with the matching directory as its Root Directory before merging this branch into `main`. Keep the Master Hub project Root Directory set to `master-hub-app`.

Production aliases:

- https://field-diagnostic-hub.vercel.app/
- https://recovery-value-calculator.vercel.app/
- https://master-hub-sigma.vercel.app/
