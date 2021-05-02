import React from 'react';

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">A.R.M ANIK</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">Projects</a>
        <a class="nav-link" href="#">Blogs</a>
        <a class="nav-link" href="#">About Me</a>
        <a class="nav-link" href="#">Get My Resume</a>
        
      </div>
    </div>
  </div>
</nav>
    </>
  );
};

export default Nav;