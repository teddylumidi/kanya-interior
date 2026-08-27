---
name: GitHub push fallback
description: Reliable fallback when a repository's HTTPS Git remote cannot authenticate in Replit.
---

When the configured GitHub HTTPS remote rejects credentials, an attached GitHub connector can update the repository through the Git Data API without exposing a token.

**Why:** Git credentials available to the shell and Replit-managed GitHub OAuth are separate; attaching the connector does not necessarily configure `git push`.

**How to apply:** Build blobs and a tree from the local changed files, create one commit on the current remote branch tip, then update the branch ref without force-pushing. Verify the remote commit and compare content before considering any local history reset.

If the connector's write requests return a Cloudflare HTML 403 while authenticated reads still work, treat it as a temporary proxy block rather than an OAuth failure. Do not reauthorize; wait and retry later, or use an already-authenticated Git/CLI path.