export const linkResolver = doc => {
  // URL for a project type

  if (doc.type === 'project') {
    return `/project/${doc.uid}`;
  }

  // Backup for all other types

  return '/';
};
