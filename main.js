var image_array = [];
function display_images()
{
    let display_temp = "";
    document.getElementsByClassName("gallery").item(0).innerHTML = "";
    for(let i=0;i<image_array.length;i++)
    {
        display_temp += `<div id = ${image_array[i]["id"]} class=image_id>
                                <img src = images${image_array[i]["name"]} ondblclick=show_in_full(${i})>
                                <div class = delete_button onclick=delete_image(${image_array[i]["id"]})>Delete</div>
                        </div>`;
    }
    document.getElementsByClassName("gallery").item(0).innerHTML = display_temp;
}

function Cut_image()
{
    document.getElementsByClassName("container").item(0).style.display = "grid";
    document.getElementsByClassName("show_in_full_image").item(0).style.display = "none";
    document.getElementsByClassName("show_in_full_image").item(0).innerHTML = "";

}
function show_in_full(get_id)
{
    console.log(get_id);
    document.getElementsByClassName("container").item(0).style.display = "none";
    document.getElementsByClassName("show_in_full_image").item(0).style.display = "grid";
    let show_image = `<div class= Cross onclick=Cut_image()>X</div>
        <img src = images${image_array[get_id]["name"]} class= full_width_height >`
    document.getElementsByClassName("show_in_full_image").item(0).innerHTML = show_image;
    console.log(get_id);
}
function delete_image(get_id)
{
    for(let i=0;i<image_array.length;i++)
    {
        if(image_array[i]["id"] == get_id)
        {
            image_array.splice(i,1);
        }
    }
    display_images();
  
}
function Image_Exsist(get_image_file)
{
    for (let index = 0; index < image_array.length; index++)
    {
        if(image_array[index]["name"] == get_image_file.substr(get_image_file.lastIndexOf("\\")))
        {
            return true;
        }
        
    }
    return false;

}
function get_image(get_image_file)
{   
    if(Image_Exsist(get_image_file))
    {
        alert("Image already Exsist");
        return;
    }
    if(get_image=="")
    {
        alert("please Select an image");
        return;
    }
    image_array.push({"id":(image_array.length).toString(),"name":get_image_file.substr(get_image_file.lastIndexOf("\\"))});
    display_images();
}