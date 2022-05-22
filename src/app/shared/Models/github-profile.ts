export class GithubProfile {
    
    avatarUrl: string | undefined;
    bio: string | undefined;
    followers: number | undefined;
    following: number | undefined;
    profileurl: string | undefined;
    id: string | undefined;
    username: string | undefined;
    name: string | undefined;
    countPublicRepos: string | undefined;

    constructor(object?: any) {
        if (object) {
            this.parse(object)
        }
    }

    public parse(object: any): void {
		this.avatarUrl = object.avatar_url;
        this.bio = object.bio;
        this.followers = object.followers;
        this.following = object.following;
        this.profileurl = object.html_url;
        this.id = object.id;
        this.username = object.login;
        this.name = object.name;
        this.countPublicRepos = object.public_repos;
	}
}
