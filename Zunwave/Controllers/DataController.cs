﻿using System;
using Zunwave.Data;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Security.Claims;

namespace Zunwave.Controllers
{
    public class DataController : ApiController
    {
        public int AppUserId
        {
            get
            {
                string appUserIdClaimValue = ((ClaimsIdentity)User.Identity)?.Claims?.FirstOrDefault(n => n.Type == "appUserId")?.Value;

                if (appUserIdClaimValue != null)
                    return int.Parse(appUserIdClaimValue);
                else
                    return 0;
            }
        }

        public class SessionState
        {
            public IEnumerable<Context.GetBooksResult> Books { get; set; }
            public IEnumerable<Context.GetCodeProjectsResult> CodeProjects { get; set; }
            public IEnumerable<Context.GetArticlesResult> Articles { get; set; }
            public IEnumerable<Context.GetSocialNetworksResult> SocialNetworks { get; set; }
            public IEnumerable<Context.GetTechnologiesResult> Technologies { get; set; }
            public Context.GetAppUserResult AppUser { get; set; }
            public bool IsAuthenticated { get; set; }
        }

        [HttpGet]
        public SessionState GetSessionState(int userId)
        {
            Context context = new Context();

            userId = AppUserId;

            var session = new SessionState() {
                Books = context.GetBooks(new Context.GetBooksParameters() { AppUserId = userId }),
                Articles = context.GetArticles(new Context.GetArticlesParameters() { AppUserId = userId }),
                CodeProjects = context.GetCodeProjects(new Context.GetCodeProjectsParameters() { AppUserId = userId }),
                SocialNetworks = context.GetSocialNetworks(new Context.GetSocialNetworksParameters() { AppUserId = userId } ),
                Technologies = context.GetTechnologies(new Context.GetTechnologiesParameters() { AppUserId = userId  }),
                AppUser = context.GetAppUser( new Context.GetAppUserParameters() { AppUserId = userId }).FirstOrDefault()
            };

            if (session.AppUser == null)
                throw new ApplicationException("Invalid AppUserId");

            return session;
        }

        [HttpPost]
        [Route("api/data/CreateArticle")]
        public void CreateArticle(Context.CreateArticleParameters parameters)
        {
            parameters.AppUserId = AppUserId;
            new Context().CreateArticle(parameters);
        }

        [HttpPost]
        [Route("api/data/CreateCodeProject")]
        public void CreateCodeProject(Context.CreateCodeProjectParameters parameters)
        {
            parameters.AppUserId = AppUserId;
            new Context().CreateCodeProject(parameters);
        }

        [HttpPost]
        [Route("api/data/CreateBook")]
        public void CreateBook(Context.CreateBookParameters parameters)
        {
            parameters.AppUserId = AppUserId;
            new Context().CreateBook(parameters);
        }
    }
}