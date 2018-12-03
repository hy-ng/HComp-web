# HCOMP website

# Getting started

## Local environment

I would suggest installing python 3, and executing `./serve.sh` to start the web server at http://localhost:8000/.

## Deployment

I would suggest cloning a [bare repository](https://git-scm.com/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server) in your home directory on the google cloud instance, e.g. at `/home/<USER>/<YEAR>.git`.

Then, editing `/home/<USER>/hcomp.git/hooks/post-receive` so that it contains something like the following:
```bash
#!/bin/bash
while read oldrev newrev ref
do
    if [[ $ref =~ .*/master$ ]];
    then
        echo "Master ref received.  Deploying master branch to production..."
        git --work-tree=/var/www/html/hcomp/<YEAR> --git-dir=/home/<USER>/<YEAR>.git checkout -f
        chown -R :adm /var/www/html/hcomp/<YEAR>
    else
        echo "Ref $ref successfully received.  Doing nothing: only the master branch may be deployed on this server."
    fi
done
```

Once you have done this, deploying website changes should be as simple as pushing to the bare repository via SSH.

**Important**: Make sure to substitute your user name for <USER> and the hcomp year for <YEAR> in the above instructions.

You will also need to change the year to the current year in `/etc/apache2/sites-available/humancomputation.conf` to redirect to the current year. Restart apache for the new configuration to take effect.

# Tasks

## Organizers page

Please add last year's conference chair(s) to the conference steering committee.

## Past meetings page

There is now a Best Poster / Demo Presentation Award. Please make sure to include it on the past meetings page in addition to the paper awards.

There are also separate proceedings for papers and WiP & demonstration papers. Please make sure to add both of these to the past meetings page.

# Tools

## Utils

To reshape an organizer's image to a square of the appropriate size, use `util/resize.sh original.png`. This will create `original-150.jpg` in the same directory as the original image. You must have ImageMagick installed.
