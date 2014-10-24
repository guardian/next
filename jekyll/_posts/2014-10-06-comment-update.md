---
layout: article
title: Updates below the line
author: cantlin
summary: We're reacting to your feedback.
discussion: p/42m5y
---

At the beginning of this month we released [new live blogs](http://next.theguardian.com/blog/liveblog-redesign/) on theguardian.com. The reaction from readers to the new layout for the content, including the key events timeline, has been great so far. Please keep giving us your thoughts in the [feedback form](https://www.surveymonkey.com/s/guardianliveblogs).

Where we hit some problems was with the comment experience, which had a number of bugs and design flaws. Some of them had even been flagged by commenters in earlier discussions. We're sorry for those issues. I wanted to take some time to let you know what we've done about them.

## The unthreaded view

While we feel a threaded view works great for most users in most discussions, we do recognise that some of our commenters prefer to see the discussion without threads.

The new comment experience introduced an unthreaded view for the first time, but as [GeoffWhit](https://id.theguardian.com/profile/geoffwhit/public) and others mentioned had some major limitations.

> "...unthreaded option removes pretty much all the functionality (reply, commenting, recommending)"

We've now updated the unthreaded view to include all the usual features you'd expect. The preference is also remembered when you refresh the page.

## The layout wasn't compact enough

By far the most common feedback was that there was too much white space in the new design. Reader [IfigEusLannuon](https://id.theguardian.com/profile/ifigeuslannuon/public) summarised it well:

> "...there is far too much white space, so you need to scroll far more screen for looking at the discussion you're in it if it evolved or not. This is the most important point."

[FrightenedRabbit](https://id.theguardian.com/profile/frightenedrat/public) went rather further.

> "The white space is sickening - don't mean that metaphorically, when I tried to read the page I feel physically sick."

 Looking at the old comment layout side by side with the one we originally released, the difference in the density of the content is clear.

<img src="/assets/images/r2-vs-old.png" width="100%" style="margin:30px 0 25px 0;" />

The old layout – on the left – fits seven comments into a space 640 pixels wide and 845 pixels high. On the right, the new layout fits *fewer* comments into a space **37% larger**.

Two weeks ago we introduced a much more compact design that both compresses the vertical height of the comments and shorterns the line length, making them easier to read.

Below is the same thread from the first release, left, and the update, right.

<img src="/assets/images/old-vs-new.png" width="100%" style="margin:30px 0 25px 0;" />

Set next to the old version, it's clear the density of the comments is back to a much more familiar level.

<img src="/assets/images/r2-vs-new.png" width="100%" style="margin:30px 0 25px 0;" />

## Text legibility

[FFC800](https://profile.theguardian.com/user/id/13393041) and others noted that *"[the] font choice is too lightweight BTL, pretty hard to read on a laptop screen"*.

Reducing the line length of the comments has improved readability significantly since the first release. The text colour now matches the old comment system.

## Refreshing comments and visiting permalinks

> "Page refresh takes you to a random place in comments."

– *[AngryAsWell](https://id.theguardian.com/profile/angryaswell/public)*

This should now be fixed for most cases. There's still one live problem with comment links to older comments (beyond page one) when you're using the "Unthreaded" view.

## Other bugs and missing features

The community have been great in reporting problems with the current user experience and areas that could be improved. Here's an incomplete list of the items we've resolved since the first release:

* FIXED: Reply button to comments with replies sometimes went missing.
* FIXED: Reply button to own comments wasn't shown.
* FIXED: Refreshing the page after clicking a comments link took you to a random place.
* FIXED: Long reply threads were not truncated.
* FIXED: "Show more replies" button didn't show any more replies.
* FIXED: No way of expanding all threads.
* FIXED: No comment box or ordering in the unthreaded view.
* FIXED: Adding hyperlinks clumsy and unusable.
* FIXED: Not clear how many pages of comments there are in total.
* FIXED: Featured (picked) comment design.
* FIXED: Visiting a jump to comments link didn't auto-expand comments.
* FIXED: Threading preference wasn't saved across page reloads.
* FIXED: Clicking "Reply" sometimes jumped you to a random place in the content.

We're still working on a critical issue with Internet Explorer 9 which is preventing users of that browser post comments. While we fix the problem we recommend IE9 users who have access to Chrome or Firefox use those instead.

See you BTL.