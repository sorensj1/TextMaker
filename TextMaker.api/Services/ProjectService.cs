using System.Collections.Generic;
using System.Linq;

namespace TextMaker.Services
{
	public class ProjectService
	{
		private static FileStore<Dictionary<string, Project>> _fileStore = new FileStore<Dictionary<string, Project>>();

		private Dictionary<string, Project> Get()
		{
			Dictionary<string, Project> projects = _fileStore.Get();
			if (projects == null)
			{
				projects = new Dictionary<string, Project>();
			}

			return projects;
		}

		public List<string> GetKeys()
		{
			lock (_fileStore)
			{
				Dictionary<string, Project> projects = Get();
				return projects.Keys.ToList();
			}
		}

		public Project GetProjectForKey(string key)
		{
			lock (_fileStore)
			{
				Dictionary<string, Project> projects = Get();
				if (!projects.ContainsKey(key))
				{
					return null;
				}

				return projects[key];
			}
		}

		public bool CreateProjectWithKey(string key, Project project, out string message)
		{
			message = string.Empty;
			lock (_fileStore)
			{
				Dictionary<string, Project> projects = Get();
				if (projects.ContainsKey(key))
				{
					message = @"Error: Project already exists.";
					return false;
				}
				else
				{
					projects.Add(key, project);
					_fileStore.Set(projects);
					return true;
				}
			}
		}

		public bool UpdateProjectWithKey(string key, Project project, out string message)
		{
			message = string.Empty;
			lock (_fileStore)
			{
				Dictionary<string, Project> projects = Get();
				if (!projects.ContainsKey(key))
				{
					message = @"Error: Project was not found.";
					return false;
				}

				projects[key] = project;
				_fileStore.Set(projects);
				return true;
			}
		}
	}
}