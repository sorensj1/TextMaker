using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace TextMaker.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class ProjectsController : ControllerBase
	{
		private static FileStore<Dictionary<string, Project>> _fileStore = new FileStore<Dictionary<string, Project>>();

		[HttpGet]
		public string[] GetKeys()
		{
			lock (_fileStore)
			{
				Dictionary<string, Project> projects = _fileStore.Get();
				return projects.Keys.ToArray();
			}
		}

		[HttpGet(@"{key: string}")]
		public Project Get(string key)
		{
			lock (_fileStore)
			{
				Dictionary<string, Project> projects = _fileStore.Get();
				return projects[key];
			}
		}

		[HttpPost(@"{key: string, project: Project}")]
		public string Create(string key, [FromBody]Project project)
		{
			lock (_fileStore)
			{
				Dictionary<string, Project> projects = _fileStore.Get();
				if (projects.ContainsKey(key))
				{
					return @"Error: Project already exists.";
				}
				else
				{
					projects.Add(key, project);
					_fileStore.Set(projects);
					return string.Empty;
				}
			}
		}

		[HttpPut(@"{key: string, project: Project}")]
		public string Update(string key, [FromBody]Project project)
		{
			lock (_fileStore)
			{
				Dictionary<string, Project> projects = _fileStore.Get();
				if (!projects.ContainsKey(key))
				{
					return @"Error: Project was not found.";
				}
				else
				{
					projects[key] = project;
					_fileStore.Set(projects);
					return string.Empty;
				}
			}
		}
	}
}
