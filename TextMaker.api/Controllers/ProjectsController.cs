using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TextMaker.Services;

namespace TextMaker.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class ProjectsController : ControllerBase
	{
		private readonly ILogger<ProjectsController> _logger;
		private readonly ProjectService _projectService;

		public ProjectsController(ILogger<ProjectsController> logger, ProjectService projectService)
		{
			_logger = logger;
			_projectService = projectService;
		}

		[HttpGet]
		public ActionResult<List<string>> Get()
		{
			_logger.LogTrace(@"Entering Projects Controller, fetching all keys.");
			return Ok(_projectService.GetKeys());
		}

		[HttpGet("{key:alpha}")]
		public ActionResult<Project> GetProject(string key)
		{
			_logger.LogTrace($@"Entering Projects Controller, fetching Project for key, ${key}.");
			return Ok(_projectService.GetProjectForKey(key));
		}

		[HttpPost("{key:alpha}")]
		public ActionResult Create(string key, [FromBody]Project project)
		{
			_logger.LogTrace($@"Entering Projects Controller, creating Project with key, ${key}.");
			if (!_projectService.CreateProjectWithKey(key, project, out string message))
			{
				return BadRequest(message);
			}

			return Ok();
		}

		[HttpPut("{key:alpha}")]
		public ActionResult Update(string key, [FromBody]Project project)
		{
			_logger.LogTrace($@"Entering Projects Controller, updating Project for key, ${key}.");
			if (!_projectService.UpdateProjectWithKey(key, project, out string message))
			{
				BadRequest(message);
			}

			return Ok();
		}
	}
}
