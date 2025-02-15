function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // Glow effect
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Her gün seninle birlikte olduğum için ne kadar şanslı olduğumu düşünüyorum.", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Her gün seninle birlikte olduğum için ne kadar şanslı olduğumu düşünüyorum.", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 500) opacity = 0;

    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) { // Shortens long sentence for mobile screens
            drawTextWithLineBreaks(["Yaşayabileceğim onca hayattan,", "seninle tanıştığım için mutluyum."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            drawTextWithLineBreaks(["Yaşayabileceğim onca hayattan,", "seninle tanıştığım için mutluyum."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks(["Yaşayabileceğim onca hayattan,", "seninle tanıştığım için mutluyum."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1000) opacity = 0;

    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Bazen çok salak bir adam olabiliyorum.", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Bazen çok salak bir adam olabiliyorum.", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1500) opacity = 0;

    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Bazen konuşurken çok sinir bozucu olabiliyorum.", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Bazen konuşurken çok sinir bozucu olabiliyorum.", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2000) opacity = 0;

    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Ağzımdan çıkanlar yüzünden", "seni kaybetmek istemiyorum."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            drawTextWithLineBreaks(["Ağzımdan çıkanlar yüzünden", "seni kaybetmek istemiyorum."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks(["Ağzımdan çıkanlar yüzünden", "seni kaybetmek istemiyorum."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2500) opacity = 0;

    if(frameNumber > 2500 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        drawTextWithLineBreaks(["Umarım ömrüm boyunca", "geceleri sinirimi bozmaya devam edersin."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 2750 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;

        drawTextWithLineBreaks(["Bu adamı lütfen affet,", "çünkü çok pişman."], canvas.width / 2, (canvas.height/2 + 60), fontSize, lineHeight);

        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("Çok özür dilerim.", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.01;

        button.style.display = "block";
    }   

    // Reset shadow effect
    context.shadowColor = "transparent";
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
}
