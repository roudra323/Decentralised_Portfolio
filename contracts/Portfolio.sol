// SPDX-License-Identifier: unlicensed
pragma solidity ^0.8.10;

contract Portfolio {
    // Variables
    uint256 public projectCount;
    uint256 public educationCount;
    uint256 public experienceCount;
    string public imageLink = "QmRQ2aRSuhSsC1ofM7B58A7FTavqypxoTGfE4D28YZoYnv";
    string public description =
        "over 6 months of practical experience with a good knowledge in blockchain development.i help web3 community by contributing in the web3 space.";
    string public resumeLink = "Add your cid";
    address public manager;

    // Structs
    struct Project {
        uint256 id;
        string name;
        string description;
        string image;
        string githubLink;
        string live_site;
    }

    struct Education {
        uint256 id;
        string date;
        string degree;
        string knowledgeAcquired;
        string instutionName;
    }

    struct Experience {
        uint256 id;
        string date;
        string post;
        string knowledgeAcquired;
        string compamyName;
    }

    // Arrays of structs
    Project[] public projects;
    Project[] public homeProjects;
    Education[3] public educationDetails;
    Experience[3] public experienceDetails;

    // Constructor
    constructor() {
        manager = msg.sender;
    }

    // Modifier
    modifier onlyManager() {
        require(manager == msg.sender, "You are not the manager");
        _;
    }

    modifier validCountORnot(uint256 count, uint256 inicount) {
        require(count >= 0 && count < inicount, "Count is not valid");
        _;
    }

    // Functions - Project
    function insertProject(
        string calldata _name,
        string calldata _description,
        string calldata _image,
        string calldata _githubLink,
        string calldata _live_site
    ) external onlyManager {
        projects.push(
            Project(
                projectCount,
                _name,
                _description,
                _image,
                _githubLink,
                _live_site
            )
        );
        projectCount++;
    }

    function changeProject(
        string calldata _name,
        string calldata _description,
        string calldata _image,
        string calldata _githubLink,
        string calldata _live_site,
        uint256 _projectCount
    ) external onlyManager validCountORnot(_projectCount, projectCount) {
        require(_projectCount >= 0, "Project ID can't be negative");
        Project memory tempPj = Project(
            _projectCount,
            _name,
            _description,
            _image,
            _githubLink,
            _live_site
        );

        projects[_projectCount] = tempPj;
    }

    function allProjects() external view returns (Project[] memory) {
        return projects;
    }

    function addProjectToHome(uint256 _projectCount)
        external
        view
        onlyManager
        validCountORnot(_projectCount, projectCount)
        returns (Project memory)
    {
        return projects[_projectCount];
    }

    // Functions - Education
    function insertEducation(
        string calldata _date,
        string calldata _degree,
        string calldata _knowledgeAcquired,
        string calldata _instutionName
    ) external onlyManager {
        require(educationCount < 3, "Only 3 education details allowed");
        educationDetails[educationCount] = Education(
            educationCount,
            _date,
            _degree,
            _knowledgeAcquired,
            _instutionName
        );
        educationCount++;
    }

    function changeEducation(
        string calldata _date,
        string calldata _degree,
        string calldata _knowledgeAcquired,
        string calldata _instutionName,
        uint256 _educationDetailCount
    ) external onlyManager {
        require(
            _educationDetailCount >= 0 && _educationDetailCount < 3,
            "Invalid educationCount"
        );
        educationDetails[_educationDetailCount] = Education(
            _educationDetailCount,
            _date,
            _degree,
            _knowledgeAcquired,
            _instutionName
        );
    }

    function allEductationDetails()
        external
        view
        returns (Education[3] memory)
    {
        return educationDetails;
    }

    //Function - Experience
    function insertExperience(
        string calldata _date,
        string calldata _post,
        string calldata _knowledgeAcquired,
        string calldata _companyName
    ) external onlyManager {
        require(experienceCount < 3, "Only 3 experience details allowed");
        experienceDetails[experienceCount] = Experience(
            experienceCount,
            _date,
            _post,
            _knowledgeAcquired,
            _companyName
        );
        experienceCount++;
    }

    function changeExperience(
        string calldata _date,
        string calldata _post,
        string calldata _knowledgeAcquired,
        string calldata _companyName,
        uint256 _experienceDetailCount
    ) external onlyManager {
        require(
            _experienceDetailCount >= 0 && _experienceDetailCount < 3,
            "Invalid experienceCount"
        );
        experienceDetails[_experienceDetailCount] = Experience(
            _experienceDetailCount,
            _date,
            _post,
            _knowledgeAcquired,
            _companyName
        );
    }

    function allExperienceDetails()
        external
        view
        returns (Experience[3] memory)
    {
        return experienceDetails;
    }

    // Functions - Other Details
    function setImageLink(string calldata _link) external onlyManager {
        imageLink = _link;
    }

    function setDescription(string calldata _description) external onlyManager {
        description = _description;
    }

    function setResumeLink(string calldata _link) external onlyManager {
        resumeLink = _link;
    }
}
