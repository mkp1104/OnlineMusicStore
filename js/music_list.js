$(document).ready(function () {

    var myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jplayer_N",
        cssSelectorAncestor: "#jp_container_N"
    }, [
        //Here, is song track..........
        
        //1 song
      {
          title: "In the End",
          artist: "Linkin Park",
          mp3: "http://music.layer07.com/LinkinPark-InTheEnd.mp3",
          poster: "images/m0.jpg"
      },

      //2 song
      {
          title: "Gimme your Love",
          artist: "Kesington Kross",
          mp3: "http://lb-962db73c.aclst.com/dl.php/k-a2jQbXY5Q/Kesington%20Kross%20-%20Gimme%20Your%20Love.mp3?video_id=k-a2jQbXY5Q&t=ay1hMmpRYlhZNVEtMzAzNDAyNjQzMC0xNDE2Mzg5NzkyLTQ3MzE2Nw%3D%3D&exp=22-11-2014&s=6d0bb50afd14d5ee8839f12075fe1840",
          poster: "images/m0.jpg"
      },
      
      //3
      {
          title: "Gimme Your Love",
          artist: "Morcheeba",
          mp3: "http://mp3.dmoon.ru/music/morcheeba_-_gimme-your-love.mp3",
          poster: "images/m0.jpg"
      },
      
      //4
      {
          title: "On The Floor",
          artist: "Jennifer Lopez",
          mp3: "http://m07.wapka-file.com/music/4643803/935809/3a4fvrbF8On9nVcswsixtAciZUffKdcPRdCigQ18PO3UsKei/129a2.mp3",
          poster: "images/m0.jpg"
      },
      
      
      //5
      {
          title: "Rolling in the Deep",
          artist: "Adele",
          mp3: "http://m04.wapkafile.com/music/13989926/1018128/0ffbKtkfK0dQ2CSu7wRDFKVfFri6SuougY1lINeXx3niXXMavg/4b808.mp3",
          poster: "images/m0.jpg"
      },
      
      
      //6
      {
          title: "Dark Horse",
          artist: "Katy Perry",
          mp3: "http://www.mp3poisk.net/dl/2325628-katy-perry-dark-horse-feat.-juicy-j-(www.mp3poisk.net).mp3",
          poster: "images/m0.jpg"
      },
      
      
      //7
      {
          title: "Slow Down The Song",
          artist: "Selena Gomez",
          mp3: "http://www.woo55.pk/adata/9301/02%20Slow%20Down%20-%20%28www.SongsLover.pk%29.mp3",
          poster: "images/m0.jpg"
      },
      
      
      //8
      {
          title: "Bailando",
          artist: "Enrique Iglesia",
          mp3: "http://www.dl2.farskids524.com/Aria/93/01/22/Enrique%20Iglesias%20ft.%20Sean%20Paul%20-%20Bailando%20(English%20Version).mp3",
          poster: "images/m0.jpg"
      },
      
      
      //9
      {
          title: "Best Song Ever",
          artist: "One Direction",
          mp3: "http://204.45.41.186/35/music/english/artist/o/one_direction/midnight_memories/Best-Song-Ever_%28webmusic.in%29.mp3",
          poster: "images/m0.jpg"
      },
      
      
      //10
      {
          title: "A Sky Full Of Stars",
          artist: "Coldplay",
          mp3: "http://sound41.topsongspk.com/songspk/files/A%20Sky%20Full%20Of%20Stars%20-%20Coldplay%20-%20%5BSongsPk.CC%5D.mp3",
          poster: "images/m0.jpg"
      },
      
      
      //11
      {
          title: "Dance Again",
          artist: "Jenifer Lopez",
          mp3: "http://www.dance911.com/media/Dance_Again.mp3",
          poster: "images/m0.jpg"
      },
	  
	  //12
      {
          title: "Shake It Off",
          artist: "Taylor Swift",
          mp3: "http://paroosmusic3.com/sam2/Singles/5.93/Taylor%20Swift%20-%20Shake%20It%20Off%20(CDQ)%20%5B320%5D.mp3",
          poster: "images/m0.jpg"
      },
	  //13
      {
          title: "Call Maybe",
          artist: "Carly Rae Jepsen",
          mp3: "http://tutpesni.ru/mp3/carly_rae_jepsen-call_me_maybe.mp3",
          poster: "images/m0.jpg"
      },
	  //14
      {
          title: "Clarity",
          artist: "Zedd (Feat Foxes)",
          mp3: "http://freemp3.se/music/user_folder/zedd-clarity-feat-foxes-1407111123.mp3",
          poster: "images/m0.jpg"
      },
	  //15
      {
          title: "Can't Remember To Forget You",
          artist: "Shakira",
          mp3: "http://cdn.songeous.com/download/aCpiqhd",
          poster: "images/m0.jpg"
      },
	  //16
      {
          title: "Monster",
          artist: "Eminem",
          mp3: "http://www.woo55.pk/adata/10602/Eminem%20-%20The%20Monster%20Feat.%20Rihanna%20%5Bwww.dwldtube.com%5D.mp3",
          poster: "images/m0.jpg"
      },
	  //17
      {
          title: "Night Changes",
          artist: "One Direction",
          mp3: "http://freemp3.se/music/user_folder/Night%20Changes%20One%20Direction%20-%201415941197.mp3",
          poster: "images/m0.jpg"
      },
	  //18
      {
          title: "Blank Space",
          artist: "Taylor Swift",
          mp3: "http://freemp3.se/music/user_folder/02%20Blank%20Space%20-%201416138283.mp3",
          poster: "images/m0.jpg"
      },
	  //19
      {
          title: "All About That Bass",
          artist: "Meghan Trainor",
          mp3: "http://uhmp3.com/user-mp3-to/8-all-about-that-bass-by-meghan-trainor.mp3",
          poster: "images/m0.jpg"
      },
	  //20
      {
          title: "When You Came Into My Life",
          artist: "Scorpions",
          mp3: "http://d.djtune.net/data/31428/When_You_Came_Into_My_Life-Scorpions%5Bwww.Mp3MaD.Com%5D.mp3",
          poster: "images/m0.jpg"
      },
	  //21
      {
          title: "All I Want",
          artist: "Jay Sean",
          mp3: "http://m05.wapka-file.com/music/23486818/2164843/3b85UoIO2PO%5EJZb%5ErRj%5ERU4IzX1WUpftJSB95Q5cQKeGUzmFpQ/3b9ea.mp3",
          poster: "images/m0.jpg"
      },
	  //22
      {
          title: "Dangerous",
          artist: "David Guetta ft Sam Martin",
          mp3: "http://songsmp3download.org/fileDownload/Songs/128/24467.mp3",
          poster: "images/m0.jpg"
      },
	  //23
      {
          title: "The Heart Wants What It Wants",
          artist: "Selena Gomez",
          mp3: "http://mp3for.me/assets/songs/393000-393999/393135-the-heart-wants-what-it-wants-selena-gomez.mp3",
          poster: "images/m0.jpg"
      },
	  //24
      {
          title: "Habits (Stay High)",
          artist: "Tove Lo",
          mp3: "http://fridaymixtape.net/mixtape/songs/188/04%20Habits.mp3",
          poster: "images/m0.jpg"
      },
	  //25
      {
          title: "Neon Lights",
          artist: "Demi Lovato",
          mp3: "http://m07.wapka-file.com/music/13461471/2435472/92cawE3alx9gbslOhOeNsOGGDPdRcskL1s1cZpSnCCreavJJYg/7c2aa.mp3",
          poster: "images/m0.jpg"
      },
	  //26
      {
          title: "I Love You Like A Love",
          artist: "Selena Gomez",
          mp3: "http://real.yourmir.info/audio/selena_gomez_-_love_you_like_a_love_song.mp3",
          poster: "images/m0.jpg"
      },
	  //27
      {
          title: "Baby One More Time",
          artist: "Britney Spears",
          mp3: "http://notmuchwithdamseling.net/BabyOneMoreTime.mp3",
          poster: "images/m0.jpg"
      },
	  //28
      {
          title: "Bad Romance",
          artist: "Lady Gaga",
          mp3: "http://m01.wapka-file.com/music/10154590/1994228/54d5TxXQNpYyzsSYyRmLokonXbFYFwTZY2zbZkV5yCy9SK5nrg/43055.mp3",
          poster: "images/m0.jpg"
      },
	  //29
      {
          title: "The World Is In My Hand",
          artist: "Cascada",
          mp3: "http://tegos.ru/new/mp3_full/Cascada_-_The_World_Is_In_My_Hands.mp3",
          poster: "images/m0.jpg"
      },
	  //30
      {
          title: "Timber",
          artist: "Pitbull",
          mp3: "http://thorilinedance.asso-web.com/uploaded/timber-pitbull-feat-kesha-timber.mp3",
          poster: "images/m0.jpg"
      },
	  //31
      {
          title: "Heart Attack",
          artist: "Demi Lovato",
          mp3: "http://poponandon.com/wp-content/uploads/2013/02/01-Heart-Attack.mp3",
          poster: "images/m0.jpg"
      },
	  //32
      {
          title: "Just Dance",
          artist: "Lady Gaga",
          mp3: "http://d.djtune.net/data/29823/Just_Dance_%28Ft._Colby_O_Donis%29-Lady_Gaga%5Bwww.Mp3MaD.Com%5D.mp3",
          poster: "images/m0.jpg"
      },
	  //33
      {
          title: "Give Me Everything(Tonight)",
          artist: "Pitbull(Feat Ne-Yo)",
          mp3: "http://candymp3.com/assets/songs/34000-34999/34386-give-me-everything-tonight-pitbull-ft-ne-yo-afrojack-nayer.mp3",
          poster: "images/m0.jpg"
      },
	  //34
      {
          title: "Like A Prayer",
          artist: "Madonna",
          mp3: "http://dl.ahangbaz.org/album/1393/06/26/500songs/300%20-%20Madonna%20-%20Like%20A%20Prayer_%28Ahangbaz.org%29_%28Ahangbaz.org%29.mp3",
          poster: "images/m0.jpg"
      },
	  //35
      {
          title: "Meteora",
          artist: "Linkin Park",
          mp3: "http://skymaza.mobi/upload_file/1/3647/3663/3666/Linkin%20Park%20-%20Meteora%20-%2003%20-%20Somewhere%20I%20Belong-.mp3",
          poster: "images/m0.jpg"
      },
	  //36
      {
          title: "Where Do I Go From Here",
          artist: "Olivia",
          mp3: "http://freemp3.se/music/user_folder/where-do-i-go-from-here-carpenters-4-1407128824.mp3",
          poster: "images/m0.jpg"
      },

      //Here, is song track END!!..........
	  
	  //TOP 10 SONGS....
	  //------START-----
	  //1st song
	  //37
	  {
          title: "Shake It Off",
          artist: "Taylor Swift",
          mp3: "http://paroosmusic3.com/sam2/Singles/5.93/Taylor%20Swift%20-%20Shake%20It%20Off%20(CDQ)%20%5B320%5D.mp3",
          poster: "images/m0.jpg"
      },
	  
	  //2st song
	  //38
	  {
          title: "Dangerous",
          artist: "David",
          mp3: "http://songsmp3download.org/fileDownload/Songs/128/24467.mp3",
          poster: "images/m0.jpg"
      },
	  
	  //3rd song
	  //39
	  {
          title: "The Heart Wants What It Wants",
          artist: "selena gomez",
          mp3: "http://mp3for.me/assets/songs/393000-393999/393135-the-heart-wants-what-it-wants-selena-gomez.mp3",
          poster: "images/m0.jpg"
      },
	  
	  //4th song
	  //40
	  {
          title: "Habits (Stay High)",
          artist: "Tove Lo",
          mp3: "http://fridaymixtape.net/mixtape/songs/188/04%20Habits.mp3",
          poster: "images/m0.jpg"
      },
	  
	  //5th song
	  //41
	  {
          title: "Give Me Everyhing Tonight",
          artist: "Pitbull",
          mp3: "http://candymp3.com/assets/songs/34000-34999/34386-give-me-everything-tonight-pitbull-ft-ne-yo-afrojack-nayer.mp3",
          poster: "images/m0.jpg"
      },
	  
	  //6th song
	  //42
	  {
          title: "Gimme Your Love",
          artist: "Kesington Kross",
          mp3: "http://lb-962db73c.aclst.com/dl.php/k-a2jQbXY5Q/Kesington%20Kross%20-%20Gimme%20Your%20Love.mp3?video_id=k-a2jQbXY5Q&t=ay1hMmpRYlhZNVEtMzAzNDAyNjQzMC0xNDE2Mzg5NzkyLTQ3MzE2Nw%3D%3D&exp=22-11-2014&s=6d0bb50afd14d5ee8839f12075fe1840",
          poster: "images/c1.jpg"
      },
	  
	  //7th song
	  //43
	  {
          title: "Bad Romance",
          artist: "Lady Gaga",
          mp3: "http://m01.wapka-file.com/music/10154590/1994228/54d5TxXQNpYyzsSYyRmLokonXbFYFwTZY2zbZkV5yCy9SK5nrg/43055.mp3",
          poster: "images/c1.jpg"
      },
	  
	  //8th song
	  //44
	  {
          title: "All I Want",
          artist: "Jay Sean",
          mp3: "http://m05.wapka-file.com/music/23486818/2164843/3b85UoIO2PO%5EJZb%5ErRj%5ERU4IzX1WUpftJSB95Q5cQKeGUzmFpQ/3b9ea.mp3",
          poster: "images/c1.jpg"
      },
	  
	  //9th song
	  //45
	  {
          title: "Heart Attack",
          artist: "Demi Lovato",
          mp3: "http://poponandon.com/wp-content/uploads/2013/02/01-Heart-Attack.mp3",
          poster: "images/c1.jpg"
      },
	  
	  //10th song
	  //46
	  {
          title: "Dance Again",
          artist: "Jennifer Lopez",
          mp3: "http://www.dance911.com/media/Dance_Again.mp3",
          poster: "images/c1.jpg"
      }
	  //END___TOP 10 SONGS....
	  //-----------END--------
	  
    ], {
        playlistOptions: {
            enableRemoveControls: true,
            autoPlay: false
        },
        swfPath: "js/jPlayer",
        supplied: "webmv, ogv, m4v, oga, mp3",
        smoothPlayBar: true,
        keyEnabled: true,
        audioFullScreen: false
    });

//Here is our song track with "click"...............
    $('#play1').click(function () {
        myPlaylist.play(0);
    });

    $('#play2').click(function () {
        myPlaylist.play(1);
    });
    
    $('#play3').click(function () {
        myPlaylist.play(2);
    });
    
    $('#play4').click(function () {
        myPlaylist.play(3);
    });
    
    $('#play5').click(function () {
        myPlaylist.play(4);
    });
    
    $('#play6').click(function () {
        myPlaylist.play(5);
    });
    
    $('#play7').click(function () {
        myPlaylist.play(6);
    });
    
    $('#play8').click(function () {
        myPlaylist.play(7);
    });
    
    $('#play9').click(function () {
        myPlaylist.play(8);
    });
    
    $('#play10').click(function () {
        myPlaylist.play(9);
    });
    
    $('#play11').click(function () {
        myPlaylist.play(10);
    });

	$('#play12').click(function () {
        myPlaylist.play(11);
    });

$('#play13').click(function () {
        myPlaylist.play(12);
    });

$('#play14').click(function () {
        myPlaylist.play(13);
    });

$('#play15').click(function () {
        myPlaylist.play(14);
    });

$('#play16').click(function () {
        myPlaylist.play(15);
    });

$('#play17').click(function () {
        myPlaylist.play(16);
    });

$('#play18').click(function () {
        myPlaylist.play(17);
    });

$('#play19').click(function () {
        myPlaylist.play(18);
    });

$('#play20').click(function () {
        myPlaylist.play(19);
    });

$('#play21').click(function () {
        myPlaylist.play(20);
    });

$('#play22').click(function () {
        myPlaylist.play(21);
    });

$('#play23').click(function () {
        myPlaylist.play(22);
    });

$('#play24').click(function () {
        myPlaylist.play(23);
    });

$('#play25').click(function () {
        myPlaylist.play(24);
    });

$('#play26').click(function () {
        myPlaylist.play(25);
    });

$('#play27').click(function () {
        myPlaylist.play(26);
    });

$('#play28').click(function () {
        myPlaylist.play(27);
    });

$('#play29').click(function () {
        myPlaylist.play(28);
    });

$('#play30').click(function () {
        myPlaylist.play(29);
    });

$('#play31').click(function () {
        myPlaylist.play(30);
    });

$('#play32').click(function () {
        myPlaylist.play(31);
    });

$('#play33').click(function () {
        myPlaylist.play(32);
    });

$('#play34').click(function () {
        myPlaylist.play(33);
    });

$('#play35').click(function () {
        myPlaylist.play(34);
    });

$('#play36').click(function () {
        myPlaylist.play(35);
    });	
    //Here is Song track end with "click"................

	
	//TOP 10 Songs..............
	$('#play37').click(function () {
        myPlaylist.play(36);
    });
	$('#play38').click(function () {
        myPlaylist.play(37);
    });
	$('#play39').click(function () {
        myPlaylist.play(38);
    });
	$('#play40').click(function () {
        myPlaylist.play(39);
    });
	$('#play41').click(function () {
        myPlaylist.play(40);
    });
	$('#play42').click(function () {
        myPlaylist.play(41);
    });
	$('#play43').click(function () {
        myPlaylist.play(42);
    });
	$('#play44').click(function () {
        myPlaylist.play(43);
    });
	$('#play45').click(function () {
        myPlaylist.play(44);
    });
	$('#play46').click(function () {
        myPlaylist.play(45);
    });
	//END______TOP 10 Songs.....

    //Here is controller, DON'T TOUCH IT!!
    $(document).on($.jPlayer.event.pause, myPlaylist.cssSelector.jPlayer, function () {
        $('.musicbar').removeClass('animate');
        $('.jp-play-me').removeClass('active');
        $('.jp-play-me').parent('li').removeClass('active');
    });

    $(document).on($.jPlayer.event.play, myPlaylist.cssSelector.jPlayer, function () {
        $('.musicbar').addClass('animate');
    });

    $(document).on('click', '.jp-play-me', function (e) {
        e && e.preventDefault();
        var $this = $(e.target);
        if (!$this.is('a')) $this = $this.closest('a');

        $('.jp-play-me').not($this).removeClass('active');
        $('.jp-play-me').parent('li').not($this.parent('li')).removeClass('active');

        $this.toggleClass('active');
        $this.parent('li').toggleClass('active');
        if (!$this.hasClass('active')) {
            myPlaylist.pause();
        } else {
            var i = Math.floor(Math.random() * (1 + 7 - 1));
            myPlaylist.play(i);
        }

    });
});
