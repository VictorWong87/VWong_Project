import React from "react";
import "./home.css";

export const HomeForm = (props) => {

    return (
        <React.Fragment>
          
            <div className="limiter">
            <div className="container-login100" style={{backgroundImage: 'url("https://wallpapertag.com/wallpaper/full/7/e/2/318614-pokemon-go-wallpaper-2558x1438-for-4k-monitor.jpg")'}}>
              <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                
                <div className="w-full text-center">
                    <span className="travelAgent text-center">
                    <img src="https://www.postard.com/wp-content/uploads/2016/09/Pok%C3%A9mon_logo_English.png" className="PokemonLogo" alt="Pokemon" />
                      <h1 className="pokemon-elites">Elites</h1>
                    </span><br/>
                  </div>
                  
                  <div className="login100-form-title p-b-53">
                    Poke-Center
                  </div>
                  ================================================
                  <div className="p-t-13 p-b-9"> 
                  <a href="/user/poke-file">
                    <span className="txt1">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN5SURBVGhD7ZnJqxVHFIef0040EDUKLrLRJMZhlfwPKgElxIGsHYJmEcSlCA7oKk5bNSunJCJqFmo2QQV3CglOqDtHdOk85vvgHiiahlvdt7s15P7gg7rVt86pfreqzqnzRoYaaqih/tcaDfPgB9gFv8KfPWzvhNXgd0bBB6e5sAfuw7tM/K4vNgfeu76Ek/AWyiabg2OPwxfQucbBFngJZRO7CHthE6ztYds+n5W9+AvQ5ljoRJ/ABShO5G9YAVOhn6bBSvgHinbOwhRoVZ/CDUgdX4fvwI1eVY5ZCjehaFNfrWgyFF/iAIyHQTUBPNVS2/rSZ6NyT5yH1NF6aFraTH2cgzHQmLZC6mADtCUPhdSXnxuRR2x6Ou2DtrUfwt9z+BwGlnEijN4G13Pbmgh3Ifweg4FkxE7P/G+hKy2B8OscXBm1tRvC2GU7Kspf7+seVX9Jc7GrEP53QC15xj+AMPQT5GoW/AGvIcbbNhXxWa7WQYy/B7USTTPUdBIfQ46+gWcQY4s8hQWQI+PIG4ixtRJMU/Ew4E+co8/gCcQ48XOx7zHMgBwZ5WPcKjuqyvtEGDhkR4aOQIx5CIvAgCa27YvnByFH+o4xtfbJUQgDRvXtGXjmxxgnbkbwI5j92rYvnrv8ymwUSTOK36CyTkMYqIpLyV/BF4i+Nb2+4jKrwimoLAeVGcvhg3qR3yEMDLK0fAGxvRjieWdLy/t0GMjd7Ichxrixnbg3PrH9COK5V4AcpZv9ZzuqympHGMg9fmdCcen4udjX6fGbBkSD0iTI0ULoFxDnQ46KAXE2VJbpQFreqZqimI68ghhvu2q1JL1omQ3XroWlQTF3eaUyUfyqR52k8RqE/1r7I+RPmabxFhm60jIIv86hSrJZqhMQBu+Al5629RGY7YZfs4yB5ZpOr7peQ9uUS+oXCH/GJk/DRtRaQaBE2yD1tREakwHN0kzqoIty0F9gWtOoygp0FtWaKEZoo5MCXcgyZhpp5RYsh7ol0+9BG6nNVkumIf9KFppTx2JxwsL0dOgnv+N3r0DRjsspN4sYWO4ZN7z/CihOxDPffx14um0GL1Zi275LUBwj2rKC2fieyJEVQItnadCsirmUcaKxI3YQmQGYQqRBrB/mTo55L/+p6ieDmSUbrwBO0pPoTA/b9pmK++K1E8ChhhpqqP+6Rkb+BeW97jSkKgP7AAAAAElFTkSuQmCC" alt="" />
                      <strong>Poke-File</strong>
                    </span></a>
                  </div>
                  ================================================
                  <div className="p-t-13 p-b-9">
                  <a href="/user/poke-trainer">
                    <span className="txt1">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN5SURBVGhD7ZnJqxVHFIef0040EDUKLrLRJMZhlfwPKgElxIGsHYJmEcSlCA7oKk5bNSunJCJqFmo2QQV3CglOqDtHdOk85vvgHiiahlvdt7s15P7gg7rVt86pfreqzqnzRoYaaqih/tcaDfPgB9gFv8KfPWzvhNXgd0bBB6e5sAfuw7tM/K4vNgfeu76Ek/AWyiabg2OPwxfQucbBFngJZRO7CHthE6ztYds+n5W9+AvQ5ljoRJ/ABShO5G9YAVOhn6bBSvgHinbOwhRoVZ/CDUgdX4fvwI1eVY5ZCjehaFNfrWgyFF/iAIyHQTUBPNVS2/rSZ6NyT5yH1NF6aFraTH2cgzHQmLZC6mADtCUPhdSXnxuRR2x6Ou2DtrUfwt9z+BwGlnEijN4G13Pbmgh3Ifweg4FkxE7P/G+hKy2B8OscXBm1tRvC2GU7Kspf7+seVX9Jc7GrEP53QC15xj+AMPQT5GoW/AGvIcbbNhXxWa7WQYy/B7USTTPUdBIfQ46+gWcQY4s8hQWQI+PIG4ixtRJMU/Ew4E+co8/gCcQ48XOx7zHMgBwZ5WPcKjuqyvtEGDhkR4aOQIx5CIvAgCa27YvnByFH+o4xtfbJUQgDRvXtGXjmxxgnbkbwI5j92rYvnrv8ymwUSTOK36CyTkMYqIpLyV/BF4i+Nb2+4jKrwimoLAeVGcvhg3qR3yEMDLK0fAGxvRjieWdLy/t0GMjd7Ichxrixnbg3PrH9COK5V4AcpZv9ZzuqympHGMg9fmdCcen4udjX6fGbBkSD0iTI0ULoFxDnQ46KAXE2VJbpQFreqZqimI68ghhvu2q1JL1omQ3XroWlQTF3eaUyUfyqR52k8RqE/1r7I+RPmabxFhm60jIIv86hSrJZqhMQBu+Al5629RGY7YZfs4yB5ZpOr7peQ9uUS+oXCH/GJk/DRtRaQaBE2yD1tREakwHN0kzqoIty0F9gWtOoygp0FtWaKEZoo5MCXcgyZhpp5RYsh7ol0+9BG6nNVkumIf9KFppTx2JxwsL0dOgnv+N3r0DRjsspN4sYWO4ZN7z/CihOxDPffx14um0GL1Zi275LUBwj2rKC2fieyJEVQItnadCsirmUcaKxI3YQmQGYQqRBrB/mTo55L/+p6ieDmSUbrwBO0pPoTA/b9pmK++K1E8ChhhpqqP+6Rkb+BeW97jSkKgP7AAAAAElFTkSuQmCC" alt="" />
                      <strong>Poke-Trainer</strong>
                    </span></a>
                  </div>
                  ================================================
                  <div className="p-t-13 p-b-9">
                  <a href="/user/poke-master">
                    <span className="txt1">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN5SURBVGhD7ZnJqxVHFIef0040EDUKLrLRJMZhlfwPKgElxIGsHYJmEcSlCA7oKk5bNSunJCJqFmo2QQV3CglOqDtHdOk85vvgHiiahlvdt7s15P7gg7rVt86pfreqzqnzRoYaaqih/tcaDfPgB9gFv8KfPWzvhNXgd0bBB6e5sAfuw7tM/K4vNgfeu76Ek/AWyiabg2OPwxfQucbBFngJZRO7CHthE6ztYds+n5W9+AvQ5ljoRJ/ABShO5G9YAVOhn6bBSvgHinbOwhRoVZ/CDUgdX4fvwI1eVY5ZCjehaFNfrWgyFF/iAIyHQTUBPNVS2/rSZ6NyT5yH1NF6aFraTH2cgzHQmLZC6mADtCUPhdSXnxuRR2x6Ou2DtrUfwt9z+BwGlnEijN4G13Pbmgh3Ifweg4FkxE7P/G+hKy2B8OscXBm1tRvC2GU7Kspf7+seVX9Jc7GrEP53QC15xj+AMPQT5GoW/AGvIcbbNhXxWa7WQYy/B7USTTPUdBIfQ46+gWcQY4s8hQWQI+PIG4ixtRJMU/Ew4E+co8/gCcQ48XOx7zHMgBwZ5WPcKjuqyvtEGDhkR4aOQIx5CIvAgCa27YvnByFH+o4xtfbJUQgDRvXtGXjmxxgnbkbwI5j92rYvnrv8ymwUSTOK36CyTkMYqIpLyV/BF4i+Nb2+4jKrwimoLAeVGcvhg3qR3yEMDLK0fAGxvRjieWdLy/t0GMjd7Ichxrixnbg3PrH9COK5V4AcpZv9ZzuqympHGMg9fmdCcen4udjX6fGbBkSD0iTI0ULoFxDnQ46KAXE2VJbpQFreqZqimI68ghhvu2q1JL1omQ3XroWlQTF3eaUyUfyqR52k8RqE/1r7I+RPmabxFhm60jIIv86hSrJZqhMQBu+Al5629RGY7YZfs4yB5ZpOr7peQ9uUS+oXCH/GJk/DRtRaQaBE2yD1tREakwHN0kzqoIty0F9gWtOoygp0FtWaKEZoo5MCXcgyZhpp5RYsh7ol0+9BG6nNVkumIf9KFppTx2JxwsL0dOgnv+N3r0DRjsspN4sYWO4ZN7z/CihOxDPffx14um0GL1Zi275LUBwj2rKC2fieyJEVQItnadCsirmUcaKxI3YQmQGYQqRBrB/mTo55L/+p6ieDmSUbrwBO0pPoTA/b9pmK++K1E8ChhhpqqP+6Rkb+BeW97jSkKgP7AAAAAElFTkSuQmCC" alt="" />
                      <strong>Poke-Master</strong>
                    </span></a>
                  </div>
                  ================================================
                  <div className="p-t-13 p-b-9">
                  <a href="/user/poke-store">
                    <span className="txt1">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN5SURBVGhD7ZnJqxVHFIef0040EDUKLrLRJMZhlfwPKgElxIGsHYJmEcSlCA7oKk5bNSunJCJqFmo2QQV3CglOqDtHdOk85vvgHiiahlvdt7s15P7gg7rVt86pfreqzqnzRoYaaqih/tcaDfPgB9gFv8KfPWzvhNXgd0bBB6e5sAfuw7tM/K4vNgfeu76Ek/AWyiabg2OPwxfQucbBFngJZRO7CHthE6ztYds+n5W9+AvQ5ljoRJ/ABShO5G9YAVOhn6bBSvgHinbOwhRoVZ/CDUgdX4fvwI1eVY5ZCjehaFNfrWgyFF/iAIyHQTUBPNVS2/rSZ6NyT5yH1NF6aFraTH2cgzHQmLZC6mADtCUPhdSXnxuRR2x6Ou2DtrUfwt9z+BwGlnEijN4G13Pbmgh3Ifweg4FkxE7P/G+hKy2B8OscXBm1tRvC2GU7Kspf7+seVX9Jc7GrEP53QC15xj+AMPQT5GoW/AGvIcbbNhXxWa7WQYy/B7USTTPUdBIfQ46+gWcQY4s8hQWQI+PIG4ixtRJMU/Ew4E+co8/gCcQ48XOx7zHMgBwZ5WPcKjuqyvtEGDhkR4aOQIx5CIvAgCa27YvnByFH+o4xtfbJUQgDRvXtGXjmxxgnbkbwI5j92rYvnrv8ymwUSTOK36CyTkMYqIpLyV/BF4i+Nb2+4jKrwimoLAeVGcvhg3qR3yEMDLK0fAGxvRjieWdLy/t0GMjd7Ichxrixnbg3PrH9COK5V4AcpZv9ZzuqympHGMg9fmdCcen4udjX6fGbBkSD0iTI0ULoFxDnQ46KAXE2VJbpQFreqZqimI68ghhvu2q1JL1omQ3XroWlQTF3eaUyUfyqR52k8RqE/1r7I+RPmabxFhm60jIIv86hSrJZqhMQBu+Al5629RGY7YZfs4yB5ZpOr7peQ9uUS+oXCH/GJk/DRtRaQaBE2yD1tREakwHN0kzqoIty0F9gWtOoygp0FtWaKEZoo5MCXcgyZhpp5RYsh7ol0+9BG6nNVkumIf9KFppTx2JxwsL0dOgnv+N3r0DRjsspN4sYWO4ZN7z/CihOxDPffx14um0GL1Zi275LUBwj2rKC2fieyJEVQItnadCsirmUcaKxI3YQmQGYQqRBrB/mTo55L/+p6ieDmSUbrwBO0pPoTA/b9pmK++K1E8ChhhpqqP+6Rkb+BeW97jSkKgP7AAAAAElFTkSuQmCC" alt="" />
                      <strong>Poke-Store</strong>
                    </span></a>
                  </div>
                  ================================================
                  <div className="p-t-13 p-b-9">
                  <a href="/user/poke-links">
                    <span className="txt1">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN5SURBVGhD7ZnJqxVHFIef0040EDUKLrLRJMZhlfwPKgElxIGsHYJmEcSlCA7oKk5bNSunJCJqFmo2QQV3CglOqDtHdOk85vvgHiiahlvdt7s15P7gg7rVt86pfreqzqnzRoYaaqih/tcaDfPgB9gFv8KfPWzvhNXgd0bBB6e5sAfuw7tM/K4vNgfeu76Ek/AWyiabg2OPwxfQucbBFngJZRO7CHthE6ztYds+n5W9+AvQ5ljoRJ/ABShO5G9YAVOhn6bBSvgHinbOwhRoVZ/CDUgdX4fvwI1eVY5ZCjehaFNfrWgyFF/iAIyHQTUBPNVS2/rSZ6NyT5yH1NF6aFraTH2cgzHQmLZC6mADtCUPhdSXnxuRR2x6Ou2DtrUfwt9z+BwGlnEijN4G13Pbmgh3Ifweg4FkxE7P/G+hKy2B8OscXBm1tRvC2GU7Kspf7+seVX9Jc7GrEP53QC15xj+AMPQT5GoW/AGvIcbbNhXxWa7WQYy/B7USTTPUdBIfQ46+gWcQY4s8hQWQI+PIG4ixtRJMU/Ew4E+co8/gCcQ48XOx7zHMgBwZ5WPcKjuqyvtEGDhkR4aOQIx5CIvAgCa27YvnByFH+o4xtfbJUQgDRvXtGXjmxxgnbkbwI5j92rYvnrv8ymwUSTOK36CyTkMYqIpLyV/BF4i+Nb2+4jKrwimoLAeVGcvhg3qR3yEMDLK0fAGxvRjieWdLy/t0GMjd7Ichxrixnbg3PrH9COK5V4AcpZv9ZzuqympHGMg9fmdCcen4udjX6fGbBkSD0iTI0ULoFxDnQ46KAXE2VJbpQFreqZqimI68ghhvu2q1JL1omQ3XroWlQTF3eaUyUfyqR52k8RqE/1r7I+RPmabxFhm60jIIv86hSrJZqhMQBu+Al5629RGY7YZfs4yB5ZpOr7peQ9uUS+oXCH/GJk/DRtRaQaBE2yD1tREakwHN0kzqoIty0F9gWtOoygp0FtWaKEZoo5MCXcgyZhpp5RYsh7ol0+9BG6nNVkumIf9KFppTx2JxwsL0dOgnv+N3r0DRjsspN4sYWO4ZN7z/CihOxDPffx14um0GL1Zi275LUBwj2rKC2fieyJEVQItnadCsirmUcaKxI3YQmQGYQqRBrB/mTo55L/+p6ieDmSUbrwBO0pPoTA/b9pmK++K1E8ChhhpqqP+6Rkb+BeW97jSkKgP7AAAAAElFTkSuQmCC" alt="" />
                      <strong>Poke-Links</strong>
                    </span></a>
                  </div>
                  ================================================
              </div>
            </div>
          </div>
          <div id="dropDownSelect1" />
        </React.Fragment>
    );
}