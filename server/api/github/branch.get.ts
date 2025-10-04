import { defineEventHandler, getQuery, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const { repo, branch } = getQuery(event) as { repo?: string; branch?: string }

  if (!repo || !branch) {
    throw createError({ statusCode: 400, statusMessage: 'Missing repo or branch' })
  }

  const url = `https://api.github.com/repos/${repo}/branches/${branch}`
  

  const res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `token ${process.env.VITE_GITHUB_TOKEN}`,
      'User-Agent': 'my-website-2025',
    }
  })


  if (!res.ok) {
    throw createError({
      statusCode: res.status,
    })
    
  }

  const json = await res.json()
  return {
    repo,
    branch,
    pushAt: json?.commit?.commit?.committer?.date ?? null,
    message: json?.commit?.commit?.message ?? null,
    author: json?.commit?.commit?.committer?.name ?? null,
    html_url: json?.commit?.html_url ?? null
  }
})
