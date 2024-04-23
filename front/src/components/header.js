import photo from "../Images/istockphoto-1263159537-612x612.jpg";

function Header() {
  return (
    <header class="header">
      <img class="logo" src={photo}></img>
      <div class="background-image"></div>
    </header>
  );
}

export default Header;
